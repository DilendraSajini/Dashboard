import { ChangeDetectionStrategy, Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startOfToday } from 'date-fns';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { COURSE_STATUS } from '../core/model/course-status';
import { COURSE_TYPE } from '../core/model/course-type';
import { FilterActions, selectClientSide, selectServerSide } from '../core/state/filter';
import { comparator } from '../core/utils/comparator-util';

interface selection {
  value: string;
  viewValue: string;
}
const COURSES_TYPES: selection[] = [
  { value: COURSE_TYPE.Individual, viewValue: COURSE_TYPE['Individual'] },
  { value: COURSE_TYPE.Group, viewValue: COURSE_TYPE['Group'] },
];

const COURSES_STATUS: selection[] = [
  { value: COURSE_STATUS.New, viewValue: COURSE_STATUS['New'] },
  { value: COURSE_STATUS.Inprogress, viewValue: COURSE_STATUS['Inprogress'] },
  { value: COURSE_STATUS.Completed, viewValue: COURSE_STATUS['Completed'] },
];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  filters: FormGroup;
  searchFieldValue = '';
  fromDate = new FormControl(startOfToday());
  toDate = new FormControl(startOfToday());
  courseType = new FormControl('group');
  courseStatus = new FormControl('completed');
  showCode = true;

  coursesTypes: selection[] = COURSES_TYPES;
  coursesStatus: selection[] = COURSES_STATUS;
  private readonly debounceTime = 400;
  private readonly destroySub = new Subject<void>();

  constructor(private readonly store: Store, fb: FormBuilder, private readonly ngZone: NgZone) {
    this.filters = fb.group({
      fromDate: this.fromDate,
      toDate: this.toDate,
      courseType: this.courseType,
      courseStatus: this.courseStatus,
    });
   }

  ngOnInit(): void {
    this.initializeFilters();
    this.subscribeToFiltersForm();
  }

  onValueChange(searchValue: any, event: any): void {
    event.preventDefault();
    if (searchValue.value.length > 1) {
      this.store.dispatch(
        FilterActions.updateSearch({
          searchValue: searchValue.value,
        })
      );
    } else {
      this.store.dispatch(
        FilterActions.updateSearch({
          searchValue: '',
        })
      );
    }
  }

  private initializeFilters() {
    combineLatest([
    this.store.select(selectServerSide),
    this.store.select(selectClientSide)])
    .pipe(
      takeUntil(this.destroySub)
    ).subscribe(value => {
      this.filters.patchValue(value[0]);
      this.showCode = value[1].showCode;
      this.searchFieldValue =  value[1].searchValue;
    });
  }

  private subscribeToFiltersForm() {
    this.filters.valueChanges
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged(comparator), takeUntil(this.destroySub))
      .subscribe(value => {
        this.ngZone.run(() => this.handleFilterChange(value));
      });
  }

  private handleFilterChange(value) {
    this.store.dispatch(
      FilterActions.updateFilterCriteria({
        fromDate: value.fromDate,
        toDate: value.toDate,
        courseType: value.courseType,
        courseStatus: value.courseStatus
      })
    );
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }
}

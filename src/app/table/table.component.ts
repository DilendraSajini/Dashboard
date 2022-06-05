import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation }
  from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { selectSearch } from '../core/state/filter';
import { selectTableData } from '../core/state/table';
import { logError } from '../core/utils/log-util';

export interface Course {
  userName: string;
  registerDate: Date;
  courseName: string;
  courseType: string;
  courseStatus: string;
  courseCode: string;
}

const DISPLAYED_COLUMNS: string[] = ['userName', 'registerDate', 'courseName', 'courseType', 'courseStatus'];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<Course>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  private readonly destroySub: Subject<void> = new Subject<void>();
  constructor(private readonly store: Store, private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sort = new MatSort();
    this.dataSource = new MatTableDataSource<Course>();
    this.initializeDataSource();
    this.displayedColumns = DISPLAYED_COLUMNS;
    this.setSearchFilter();
  }

  sortData(sort: Sort) {
    if (this.dataSource.sort !== null && sort) {
      this.sort.active = sort.active;
      this.sort.direction = sort.direction;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }

  private initializeDataSource() {
    this.store
      .select(selectTableData)
      .pipe(takeUntil(this.destroySub))
      .subscribe(tableData => {
        this.dataSource.data = tableData;
        this.initializeSorting();
      });
  }

  private initializeSorting() {
    this.sort.active = 'userName';
    this.sort.direction = 'asc';
    this.sortData(this.sort);
    this.sort.sortChange.emit();
  }

  private setSearchFilter() {
    this.store
      .select(selectSearch)
      .pipe(
        map((searchValue: string ) => {
          this.applyFilter(searchValue);
          return searchValue;
        }),
        catchError(error => {
          logError(this, error, 'setSearchFilter');
          return of([]);
        }),
        takeUntil(this.destroySub)
      )
      .subscribe();
  }

  private applyFilter(searchValue: string) {
    this.dataSource.filter = searchValue;
  }
}

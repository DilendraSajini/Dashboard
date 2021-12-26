import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterActions } from '../core/state/filter';

interface selection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  coursesTypes: selection[] = [
    { value: 'individual', viewValue: 'Individual' },
    { value: 'group', viewValue: 'Group' },
  ];
  coursesStatus: selection[] = [
    { value: 'new', viewValue: 'New' },
    { value: 'inprogress', viewValue: 'Inprogress' },
    { value: 'completed', viewValue: 'Completed' },
  ];
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
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

}

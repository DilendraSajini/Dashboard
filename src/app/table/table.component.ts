import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectTableData } from '../core/state/table';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  displayedColumns: string[];
  dataSource: Course[];
  private readonly destroySub: Subject<void> = new Subject<void>();
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.initializeDataSource();
    this.displayedColumns = DISPLAYED_COLUMNS;
  }

  private initializeDataSource() {
    this.store
      .select(selectTableData)
      .pipe(takeUntil(this.destroySub))
      .subscribe(tableData => {
        this.dataSource = tableData;
      });
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }
}

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Course {
  userName: string;
  registerDate: Date;
  courseName: string;
  courseType: string;
  courseStatus: string;
  courseCode: string;
}

const ELEMENT_DATA: Course[] = [
  { userName: 'UserName1', registerDate: new Date(), courseName: 'Course 01', courseType: 'Individual', courseStatus: 'Inprogress', courseCode: '001' },
];

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

  constructor() { }

  ngOnInit(): void {
    this.initializeDataSource();
    this.displayedColumns = ['userName', 'registerDate', 'courseName', 'courseType', 'courseStatus'];
  }

  private initializeDataSource() {
    this.dataSource = ELEMENT_DATA;
  }
}

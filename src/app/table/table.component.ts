import { Component, OnInit } from '@angular/core';

export interface Course {
  registerDate: Date;
  courseName: string;
  courseType: string;
  courseStatus: string;
  courseCode: string;
}

const ELEMENT_DATA: Course[] = [
  { registerDate: new Date(), courseName: 'Hydrogen', courseType: 'Chemistry', courseStatus: 'H', courseCode: '001' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['registerDate', 'courseName', 'courseType', 'courseStatus'];
  }

}

import { Component, OnInit } from '@angular/core';

interface selection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
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
  constructor() { }

  ngOnInit(): void {
  }

}

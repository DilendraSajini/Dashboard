export class Course {
  id: string;
  name: string;
  type: COURSE_TYPE;
}

export enum COURSE_TYPE {
  All = 'All',
  Individual = 'Individual',
  Group = 'Group'
}

export enum COURSE_STATUS {
  All = 'All',
  New = 'New',
  Inprogress = 'Inprogress',
  Completed = 'Completed'
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSE_STATUS } from '../model/course';
import { COURSE_TYPE } from '../model/course';

interface UserRecord {
  userName: string;
  registerDate: Date;
  courseName: string;
  courseType: string;
  courseStatus: string;
  courseCode: string;
}

export class SearchCriteria {
  constructor(
    readonly loggingUserId: string,
    readonly fromDate?: Date | null,
    readonly toDate?: Date | null,
    readonly courseType?: string,
    readonly courseStatus?: string
  ) { }
}

const DISPLAYED_USERS: UserRecord[] = [
  {
    userName: 'UserName1', registerDate: new Date(), courseName: 'Course 01', courseType: 'Individual',
    courseStatus: 'Inprogress', courseCode: '001'
  },
  {
    userName: 'UserName2', registerDate: new Date(), courseName: 'Course 02', courseType: 'Group',
    courseStatus: 'Inprogress', courseCode: '002'
  },
  {
    userName: 'UserName3', registerDate: new Date(), courseName: 'Course 03', courseType: 'Individual',
    courseStatus: 'New', courseCode: '003'
  },
  {
    userName: 'UserName4', registerDate: new Date(), courseName: 'Course 04', courseType: 'Group',
    courseStatus: 'Inprogress', courseCode: '004'
  },
  {
    userName: 'UserName5', registerDate: new Date(), courseName: 'Course 05', courseType: 'Individual',
    courseStatus: 'Completed', courseCode: '005'
  }];

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  public findRecordsByUser(
    searchCriteria: SearchCriteria
  ): Observable<Array<UserRecord>> {
    const result = DISPLAYED_USERS.filter(user => {
      let validDate: Boolean = searchCriteria.fromDate <= user.registerDate &&
        user.registerDate <= searchCriteria.toDate;
      let validCourse: Boolean = (
        (user.courseType === searchCriteria.courseType || searchCriteria.courseType === COURSE_TYPE.All)
        &&
        (user.courseStatus === searchCriteria.courseStatus || searchCriteria.courseStatus === COURSE_STATUS.All));
      return validDate && validCourse;
    });
    return of(result);
  }

}

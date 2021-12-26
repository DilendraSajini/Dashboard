import { Observable, of } from 'rxjs';
import { UserRecord } from './user-record';

export interface FilterTemplate {
  loggingUserId: string;
  fromDate?: Date;
  toDate?: Date;
  receivingUnitIds?: string[];
  recipientUserId?: string[];
}
export class SearchCriteria {
  constructor(
    private readonly loggingUserId: string,
    private readonly fromDate?: Date | null,
    private readonly toDate?: Date | null,
    private readonly courseType?: string,
    private readonly courseStatus?: string
  ) { }
}

export function findRecordsByUser(
  searchCriteria: any,
): Observable<Array<UserRecord>> {
  return of([{ userName: 'UserName1', registerDate: new Date(), courseName: 'Course 01', courseType: 'Individual', courseStatus: 'Inprogress', courseCode: '001' }]);
}

import { Observable, of } from "rxjs";
import { LoggingUser } from "../state/logging-user/logging-user.reducer";

export class SearchCriteria {
  constructor(
    private readonly loggingUserId: string,
  ) { }
}

export function findLoggingUser(
): Observable<LoggingUser> {
  return of({
    id: '02',
    name: 'User 02',
    type: 'Acedemic'
  });
}

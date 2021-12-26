// export function getFormattedCollectionDateTime(
//   datePipe: AtDatePipe,
//   collectionDate?: Date,
//   collectionTime?: string
// ): string {
//   const SPACE = isCollectionDateValid(collectionDate) && collectionTime ? ' ' : '';
//   return getFormatedDate(datePipe, collectionDate) + SPACE + getFormatedTime(collectionTime);
// }

// /**
//  * Return undefined if provided date is a InvalidDate
//  * @param InvalidDate
//  * @returns undefined
//  */
// export function getDate(date: Date | null): Date | undefined {
//   return date && !isNaN(date.valueOf()) ? date : undefined;
// }

// function getFormatedDate(datePipe: AtDatePipe, collectionDate?: Date | undefined): string {
//   return isCollectionDateValid(collectionDate) ? `${datePipe.transform(collectionDate, 'mediumDate')}` : '';
// }

// function getFormatedTime(collectionTime?: string): string {
//   return collectionTime ? getTimeString(collectionTime) : '';
// }

// function getTimeString(collectionTime?: string): string {
//   const splitIndex: number = 5;
//   return `${collectionTime ? collectionTime.substr(0, splitIndex) : ''}`;
// }

// function isCollectionDateValid(date?: Date): boolean | undefined {
//   return date && !isNaN(date.valueOf());
// }

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
//import { map, take, takeUntil } from 'rxjs/operators';
import { LoggingUserActions } from '../core/state/logging-user';
import { selectUserName } from '../core/state/logging-user';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  private readonly destroySub = new Subject<void>();
  loggingUser$: Observable<string>;

  constructor(private readonly store: Store, public translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    this.translate.use(this.translate.getBrowserLang());
    //translate.setDefaultLang('sv');
  }

  ngOnInit(): void {
    this.store.dispatch(LoggingUserActions.setLoggingUser());
    this.loggingUser$ = this.store
    .select(selectUserName);

  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }
}

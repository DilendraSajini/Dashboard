import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { LoggingUserActions } from '../core/state/logging-user';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  constructor(private readonly store: Store, public translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    this.translate.use(this.translate.getBrowserLang());
    translate.setDefaultLang('sv');
  }

  ngOnInit(): void {
    this.store.dispatch(LoggingUserActions.getLoggingUser())
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}

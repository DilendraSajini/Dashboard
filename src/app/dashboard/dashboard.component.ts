import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    this.translate.use(this.translate.getBrowserLang());
    translate.setDefaultLang('sv');
  }

  ngOnInit(): void {

  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}

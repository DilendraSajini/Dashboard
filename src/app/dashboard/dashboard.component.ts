import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {

  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}

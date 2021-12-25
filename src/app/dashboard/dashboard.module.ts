import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MaterialSharedModule } from "src/core";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

const API = [
  DashboardComponent,
];

@NgModule({
  declarations: API,
  exports: API,
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MaterialSharedModule,
    DashBoardRoutingModule
  ],
  providers: []
})
export class DashBoardModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

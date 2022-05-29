import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialSharedModule } from '../core';
import { FilterStoreModule } from '../core/state/filter/filter-store.module';
import { LoggingUserStoreModule } from '../core/state/logging-user/logging-user-store.module';
import { RootStoreModule } from '../core/state/root-store.module';
import { TableDataStoreModule } from '../core/state/table/table-store.module';
import { FilterComponent } from '../filter/filter.component';
import { TableComponent } from '../table/table.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

const API = [
  DashboardComponent,
  FilterComponent,
  TableComponent
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
    DashBoardRoutingModule,
    RootStoreModule,
    FilterStoreModule,
    TableDataStoreModule,
    LoggingUserStoreModule
  ],
  providers: []
})
export class DashBoardModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { provideBootstrapEffects } from '../bootstrap-effects';
import { LoggingUserEffects } from './logging-user.effects';
import { featureKey, reducer } from './logging-user.reducer';

@NgModule({
  imports: [StoreModule.forFeature(featureKey, reducer)],
  providers: [provideBootstrapEffects([LoggingUserEffects])],
})
export class LoggingUserStoreModule {}

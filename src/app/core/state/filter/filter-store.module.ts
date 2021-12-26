import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { provideBootstrapEffects } from '../bootstrap-effects';
import { FilterEffects } from './filter.effects';
import { featureKey, reducer } from './filter.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer)
  ],
  providers: [provideBootstrapEffects([FilterEffects])],
})
export class FilterStoreModule {}

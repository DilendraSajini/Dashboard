import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { provideBootstrapEffects } from '../bootstrap-effects';
import { TableEffects } from './table.effects';
import { featureKey, reducer } from './table.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer)
  ],
  providers: [provideBootstrapEffects([TableEffects])],
})
export class TableDataStoreModule {}

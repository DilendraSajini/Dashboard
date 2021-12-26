import { APP_BOOTSTRAP_LISTENER, Type } from '@angular/core';
import { EffectSources } from '@ngrx/effects';

export function bootstrapEffects(sources: EffectSources, ...effects: Type<any>[]) {
  return () => effects.forEach(effect => sources.addEffects(effect));
}

export function provideBootstrapEffects(effects: Type<any>[]) {
  return [
    effects,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: bootstrapEffects,
      deps: [EffectSources, ...effects],
    },
  ];
}

import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class TableEffects {
  constructor(private actions$: Actions, private readonly store: Store) { }

}

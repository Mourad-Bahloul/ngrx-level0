import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action {
  type: string = ADD_TUTORIAL;
  constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
  type: string = REMOVE_TUTORIAL;
  constructor(public payload: Tutorial) { }
}

export type Actions = AddTutorial | RemoveTutorial;

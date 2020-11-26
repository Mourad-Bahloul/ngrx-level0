import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

// const intialState: Tutorial = {
//   name: 'Initial Tutorial',
//   url: 'http://google.com'
// };

export function reducer(state: Tutorial[] = [], action): (number | Tutorial)[] {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      return state.filter((tuto, index) => index !== action.payload);
    default:
      return state;
  }
}

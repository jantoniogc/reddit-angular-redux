import { Selected } from './selected.model';
import { AllActions, SELECT_SUBREDDIT } from './selected.actions';

const initialState: Selected = {
  name: 'reactjs'
};

export function selectedReducer(state: Selected = initialState, action: AllActions): Selected {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.selected;
    default:
      return state;
  }
}

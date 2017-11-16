import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { postReducer } from './post/post.reducer';
import { selectedReducer } from './selected/selected.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
  posts: postReducer,
  selected: selectedReducer,
};

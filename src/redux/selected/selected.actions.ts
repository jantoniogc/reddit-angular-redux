import { Action } from '@ngrx/store';
import { Selected } from './selected.model';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export class SelectedSubredditAction implements Action {
  readonly type = SELECT_SUBREDDIT;

  constructor(
    public selected: Selected
  ) {}
}

export type AllActions = SelectedSubredditAction;

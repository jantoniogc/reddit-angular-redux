import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { SELECT_SUBREDDIT, SelectedSubredditAction } from './selected.actions';
import { RequestPostsAction } from './../post/post.actions';

import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class SelectedEffects {

  @Effect() requestPosts$: Observable<Action> = this.actions$.ofType(SELECT_SUBREDDIT)
  .pipe(
    map((action: SelectedSubredditAction) => {
      return new RequestPostsAction(action.selected.name);
    })
  );

  constructor(
    private actions$: Actions
  ) {}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { REQUEST_POSTS, AddPostsAction, RequestPostsAction } from './post.actions';

import { mergeMap, map } from 'rxjs/operators';

import { PostsService } from './../../app/posts.service';

@Injectable()
export class PostEffects {

  @Effect() requestPosts$: Observable<Action> = this.actions$.ofType(REQUEST_POSTS)
  .pipe(
    mergeMap((action: RequestPostsAction) => {
      return this.postsService.getPosts(action.topic)
      .pipe(
        map((response: any) => {
          return new AddPostsAction(response.data.children.map(item => {
            return item.data;
          }));
        })
      );
    })
  );

  constructor(
    private postsService: PostsService,
    private actions$: Actions
  ) {}
}

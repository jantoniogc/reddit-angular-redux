import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from './../redux/app.state';

import { Post } from './../redux/post/post.model';

import { SelectedSubredditAction } from './../redux/selected/selected.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics: string[] = ['popular', 'gaming'];
  select: FormControl;

  posts: Post[] = [];

  constructor(
    private store: Store<AppState>
  ) {
    this.select = new FormControl('', [Validators.required]);
    this.select.valueChanges
    .subscribe((value) => {
      const action = new SelectedSubredditAction({
        name: value
      });
      this.store.dispatch(action);
    });

    this.store.select('posts')
    .subscribe((posts) => {
      this.posts = posts;
    });
  }


}

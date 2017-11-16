import { Post } from './post/post.model';
import { Selected } from './selected/selected.model';

export interface AppState {
  posts: Post[];
  selected: Selected;
}

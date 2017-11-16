import { Post } from './post.model';
import { AllActions, ADD_POSTS } from './post.actions';

export function postReducer(state: Post[] = [], action: AllActions): Post[] {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case ADD_POSTS: {
      return action.posts;
    }
    default: {
      return state;
    }
  }
}

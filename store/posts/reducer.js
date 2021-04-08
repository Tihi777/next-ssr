import { FETCH_POSTS_SUCCESS } from "./types";

export const postsInitialState = {
  data: [],
  isLoading: false,
  error: null,
}

const postsReducer = (posts = postsInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return { ...posts, data: payload };
    default:
      return posts;
  }
}

export default postsReducer;
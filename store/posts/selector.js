import { shallowEqual, useSelector } from "react-redux";

export function usePosts() {
  return useSelector(({ posts }) => ({
    posts: posts.data,
    isLoading: posts.isLoading,
    error: posts.error
  }), shallowEqual)
}
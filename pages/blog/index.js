import { usePosts } from "../../store/posts/selector";
import { fetchPosts } from "../../store/posts/actions";
import { initializeStore } from "../../store/store";

import MainLayout from "../../components/MainLayout/MainLayout";
import Post from "../../components/Post/Post";

import styles from '../../styles/Blog.module.scss';

export default function Blog() {
  const { posts } = usePosts();

  return (
    <MainLayout title="Blog">
        <div className={styles.title}>
          All Blog Post
        </div>
        <div className={styles.posts}>
          {
            posts.map(post => (
              <Post key={post.id} {...post}/>
            ))
          }
        </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(fetchPosts());

  return { props: { initialReduxState: reduxStore.getState() }}
}

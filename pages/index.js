import {usePosts} from "../store/posts/selector";
import {initializeStore} from "../store/store";
import {fetchPosts} from "../store/posts/actions";

import MainLayout from "../components/MainLayout/MainLayout";
import Post from "../components/Post/Post";

import styles from "../styles/Home.module.scss"

export default function Home() {
  const { posts } = usePosts();

  return (
    <MainLayout title="Home">
        <div className={styles.title}>
          Most popular posts
        </div>
        <div className={styles.posts}>
          {
            posts.slice(0, 3).map(post => (
              <Post key={post.id} {...post}/>
            ))
          }
        </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(fetchPosts());

  return { props: { initialReduxState: reduxStore.getState() }}
}

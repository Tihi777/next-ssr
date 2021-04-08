import { getAllPostsSlugs, getPostData } from "../../utils/postsUtils";

import Date from "../../components/Date/Date";
import MainLayout from "../../components/MainLayout/MainLayout";

import styles from '../../styles/Post.module.scss'

export default function SinglePost({post: { title, date, content}}) {

  return (
    <MainLayout title={title}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.date}>
        <Date dateString={date?.slice(0, 10)} />
      </div>
      <div className={styles.content}>{content}</div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsSlugs();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)

  return {
    props: {
      post: postData
    }
  }
}

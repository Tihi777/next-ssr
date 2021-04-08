import Link from 'next/link';
import Date from "../Date/Date";
import styles from './Post.module.scss';

const Post = ({ id, title, date, content }) => (
  <div className={styles.post}>
    <Link href={`/blog/${id}`}><a className={styles.title}>{ title }</a></Link>
    <div className={styles.date}><Date dateString={date?.slice(0, 10)} /></div>
    <div className={styles.preview}>{content}</div>
    <Link href={`/blog/${id}`}><a className={styles.readMore}>Read more</a></Link>
  </div>
);


export default Post;
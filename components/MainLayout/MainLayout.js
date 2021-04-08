import React from 'react';
import Head from "next/head";
import Link from "next/link";

import styles from './MainLayout.module.scss';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{ title ? `${title} | The Blog of Dr. John H. Watson` : "The Blog of Dr. John H. Watson"}</title>
        <meta name="keyword" content="blog,watson,john,posts"/>
        <meta name="description" content="The personal blog of Dr. Jhon H. Watson"/>
        <meta property="og:image" content="https://next-ssr-rho.vercel.app/images/og-img.png"/>
        <meta name="og:title" content="The personal blog of Dr. Jhon H. Watson" />
      </Head>
      <header>
        <div className={styles.title}>
          <div className={styles.text}>
            <p>The personal blog of</p>
            <h1>Dr. Jhon H. Watson</h1>
          </div>
        </div>
        <div className={styles.navigation}>
          <Link href='/'>Home</Link>
          <div className={styles.logo}/>
          <Link href='/blog'>Blog</Link>
        </div>
      </header>
      <main className={styles.appContainer}>
        {children}
      </main>
      <footer className={styles.footer}>
        Powered by <span className={styles.red}>Next.js</span>
      </footer>
    </>
  );
}

export default MainLayout;
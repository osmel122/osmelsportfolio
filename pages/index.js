import Head from 'next/head';
import Chatbox from '../components/Chatbox';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Osmel's Portfolio</title>
        <meta name="description" content="Personal portfolio of Osmel Hernandez" />
      </Head>

      <header className={styles.header}>
        <h1>Osmel's Portfolio</h1>
        <p>Welcome! I am a student learning React, JavaScript, and web design.</p>
      </header>

      <section className={styles.section}>
        <h2>About Me</h2>
        <p>Hi, I’m Osmel Hernandez. I am working on projects using frameworks like React and Next.js.</p>
      </section>

      <section className={styles.section}>
        <h2>Contact Me</h2>
        <p>Email: Hernaosm@kean.edu</p>
      </section>

      <section className={styles.section}>
        <h2>Chat with Me</h2>
        <Chatbox />
      </section>
    </div>
  );
}

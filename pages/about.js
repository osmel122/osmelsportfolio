// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - My Portfolio</title>
      </Head>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>Hello! My name is Osmel Hernandez, I am majoring in Info Tech,focused on cybersecurity.</p>
        <p>I am a senior and currently trying to gain as much expierence as I can. I graduate in 2025, this upcoming May. In this class I am using technologies like React, Next.js, and more!</p>
        <p> I attend Kean University and I am currently working for the Kean IT department.</p>
      </div>
    </>
  );
}


import Head from 'next/head';
import Chatbox from '../components/Chatbox';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Osmel's Portfolio</title>
        <meta name="description" content="Personal portfolio of Osmel Hernandez" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.glowHeading}>Osmel's Portfolio</h1>
          <p>Welcome! I am a student learning React, JavaScript, and web design.</p>
        </header>

        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>Hi, I’m Osmel Hernandez. I am working on projects using frameworks like React and Next.js.</p>
          <p> Some of my hobbies include exercising, golfing, reading, and DJing</p>
        </section>

        <section id="technologies" className={styles.section}>
          <h2>Technologies Used</h2>
          <p>Some technologies I use include HTML, CSS, JavaScript, React, and Next.js.</p>
        </section>

        <section id="experience" className={styles.section}>
          <h2>Experience</h2>
          <p>I have hands-on experience working with various web development projects, improving my skills in front-end technologies.</p>
          <p> I currently am working for KEAN IT as a Help Desk Technician</p>
          <p> My job duties include resetting passwords, multifactor authentification, troubleshooting, network issues, and hardware issues</p>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact Me</h2>
          <p>Email: Hernaosm@kean.edu</p>
          <p> Phone: 908-875-9663</p>
        </section>

        <section id="chat" className={styles.section}>
          <h2>Chat with Me</h2>
          <Chatbox />
        </section>
      </div>
    </>
  );
}

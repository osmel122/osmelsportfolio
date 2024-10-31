// pages/skills.js
import Head from 'next/head';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Skills</title>
        <meta name="description" content="Skills and technologies I use." />
      </Head>
      <h1>My Skills</h1>
      <p> Java, PHP , SQL,SQL workbench, Visual Studio Code, Roblox Studio</p>
      <p>Here are some of the technologies I work with:</p>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <h2>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a>
          </h2>
          <p>Building user interfaces with components.</p>
        </div>
        <div className={styles.skill}>
          <h2>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </h2>
          <p>React framework for server-side rendering and static site generation.</p>
        </div>
        {}
      </div>
    </div>
  );
};

export default Skills;



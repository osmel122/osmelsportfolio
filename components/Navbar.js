// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>
      <Link href="/">My Portfolio</Link>
    </h1>
    <ul className={styles.navLinks}>
      <li><Link href="/about">About Me</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li>
        <a href="https://github.com/osmel122" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

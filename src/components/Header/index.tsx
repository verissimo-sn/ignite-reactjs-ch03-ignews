import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a className={styles.active}>Posts</a>
          </Link>
        </nav>

        <SignInButton/>
      </div>
    </header>
  );
}
import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import Image from 'next/image';
import MainHeaderBackground from './mainHeaderBackground';
export default function mainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} alt='A plant with food on it' priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href='/meals'>Meals</Link>
            </li>
            <li>
              <Link href='/community'>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import Link from 'next/link';
import logoImg from '@/assets/logo.png';

export default function mainHeader() {
  return (
    <header>
      <Link href='/'>
        <img src={logoImg.src} alt='A plant with food on it' />
        NextLevel Food
      </Link>
      <nav>
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
  );
}

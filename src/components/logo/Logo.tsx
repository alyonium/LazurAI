import styles from './Logo.module.css';
import Image from 'next/image';
import { LogoSize } from '@/types/types';
import logoImage from '/public/logo.svg';

type LogoProps = {
  size: LogoSize;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Image alt='LazurAI logo' src={logoImage} className={styles.logo} />
      <span className='body-lg-b text-blue1000'>LazurAI</span>
    </div>
  );
};

export default Logo;

'use client';
import styles from './Header.module.css';
import { useTranslations } from 'next-intl';
import Button from '@/components/button/Button';
import { ButtonSize, LogoSize } from '@/types/types';
import Logo from '@/components/logo/Logo';

const Header = () => {
  const t = useTranslations('header');

  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Logo size={LogoSize.medium} />
          </div>
          <div className={styles.menuWrapper}>
            <span className='menu-item-md'>{t('gettingStarted')}</span>
            <span className='menu-item-md'>{t('models')}</span>
            <span className='menu-item-md'>{t('features')}</span>
            <span className='menu-item-md'>{t('pricing')}</span>
            <span className='menu-item-md'>{t('currency')}</span>
            <span className='menu-item-md'>{t('seenOn')}</span>
            <span className='menu-item-md'>{t('contacts')}</span>
          </div>
          <div className={styles.buttonsWrapper}>
            <Button text='Log In' size={ButtonSize.small} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

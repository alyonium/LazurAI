import styles from './Header.module.css';
import { useTranslations } from 'next-intl';
import Button from '@/components/button/Button';
import { ButtonSize, LogoSize } from '@/types/types';
import Logo from '@/components/logo/Logo';
import LangPicker from '@/components/langPicker/LangPicker';
import Image from 'next/image';
import menuIcon from '/public/menu.svg';

const Header = () => {
  const t = useTranslations('header');

  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Logo size={LogoSize.medium} />
          </div>
          <div className={styles.menuHorizontal}>
            <span className='menu-item-md'>{t('gettingStarted')}</span>
            <span className='menu-item-md'>{t('models')}</span>
            <span className='menu-item-md'>{t('features')}</span>
            <span className='menu-item-md'>{t('pricing')}</span>
            <span className='menu-item-md'>{t('currency')}</span>
            <span className='menu-item-md'>{t('seenOn')}</span>
            <span className='menu-item-md'>{t('contacts')}</span>
          </div>
          <div className={styles.buttonsWrapper}>
            <LangPicker />
            <Button text={t('button')} size={ButtonSize.small} />
            <div className={styles.menuIcon}>
              <Image
                alt='burger menu icon'
                src={menuIcon}
                className={styles.menuIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

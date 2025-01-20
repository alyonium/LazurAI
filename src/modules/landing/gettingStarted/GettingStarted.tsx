import classNames from 'classnames';
import styles from './GettingStarted.module.css';
import Chip from '@/components/chip/Chip';
import { ButtonSize, ChipType } from '@/types/types';
import { useTranslations } from 'next-intl';
import Button from '@/components/button/Button';

const GettingStarted = () => {
  const t = useTranslations('gettingStarted');

  return (
    <div className={classNames('module-wrapper', styles.moduleWrapper)}>
      <div className={classNames('content-wrapper', styles.contentWrapper)}>
        <div className={classNames('content', styles.content)}>
          <div className={styles.textWrapper}>
            <Chip text={t('chip')} type={ChipType.default} />
            <h2 className='header-main-md text-blue1000'>{t('heading')}</h2>
            <div className='body-lg'>{t('info')}</div>
          </div>
          <video width='100%' autoPlay muted loop>
            <source src='/gettingStartedVideo.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <Button text={t('button')} size={ButtonSize.large} />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;

import Button from '@/components/button/Button';
import Circle from '@/components/circle/Circle';
import styles from '@/modules/landing/main/Main.module.css';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { ButtonSize, LogoSize } from '@/types/types';
import Logo from '@/components/logo/Logo';

const Background = () => {
  return (
    <div className={styles.background}>
      <div>
        <div className={styles.halfBlock} />
        <Circle />
        <div className={styles.centerCircle}>
          <Logo size={LogoSize.large} />
        </div>
        <div className={styles.centerCircleShadow} />
      </div>
    </div>
  );
};
const Main = () => {
  const t = useTranslations('main');

  return (
    <div className={classNames('module-wrapper', styles.moduleWrapper)}>
      <Background />

      <div className={classNames('content-wrapper', styles.contentWrapper)}>
        <div className={classNames('content', styles.content)}>
          <div className={styles.headingWrapper}>
            <h1 className='text-stroked header-main-md'>
              {t('oneSubscription')}
            </h1>
            <h1 className='text-blue1000 header-main-md'>
              {t('endlessPossibilities')}
            </h1>
          </div>

          <div className={styles.infoWrapper}>
            <div className='body-xl'>
              {t.rich('getAllAiTools', {
                bold: (chunks) => (
                  <span className='body-sm-b text-blue1000'>{chunks}</span>
                ),
              })}
            </div>
            <Button text={t('button')} size={ButtonSize.large} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import Image from 'next/image';
import styles from './CaruselCard.module.css';
import classNames from 'classnames';
import { CaruselCardType } from '@/types/types';

type CaruselCardProps = {
  type: CaruselCardType;
  text: string;
  // TODO
  image: any;
};

const CaruselCardBlue = ({ text, image }: CaruselCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={classNames(styles.imageWrapper, styles.blueImageWrapper)}>
        <Image alt='company logo' src={image} className={styles.image} />
      </div>
      <span
        className={classNames(
          'body-md-b text-white',
          styles.textWrapper,
          styles.blueTextWrapper
        )}
      >
        {text}
      </span>
    </div>
  );
};

const CaruselCardWhite = ({ text, image }: CaruselCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div
        className={classNames(styles.imageWrapper, styles.whiteImageWrapper)}
      >
        <Image alt='company logo' src={image} className={styles.image} />
      </div>
      <span
        className={classNames(
          'body-xxs-b',
          styles.textWrapper,
          styles.whiteTextWrapper
        )}
      >
        {text}
      </span>
    </div>
  );
};

const CaruselCardTransparent = ({ text, image }: CaruselCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div
        className={classNames(
          styles.imageWrapper,
          styles.transparentImageWrapper
        )}
      >
        <Image alt='company logo' src={image} className={styles.image} />
      </div>
      <span
        className={classNames(
          'body-xxs-b text-white',
          styles.textWrapper,
          styles.transparentTextWrapper
        )}
      >
        {text}
      </span>
    </div>
  );
};

const CaruselCard = ({ type, text, image }: CaruselCardProps) => {
  switch (type) {
    case CaruselCardType.blue:
      return <CaruselCardBlue text={text} image={image} />;
    case CaruselCardType.transparent:
      return <CaruselCardTransparent text={text} image={image} />;
    case CaruselCardType.white:
      return <CaruselCardWhite text={text} image={image} />;
    default:
      return <CaruselCardBlue text={text} image={image} />;
  }
};

export default CaruselCard;

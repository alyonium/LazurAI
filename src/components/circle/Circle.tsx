import styles from '@/components/circle/Circle.module.css';
import React from 'react';
import CaruselCard from '@/components/caruselCard/CaruselCard';
import amazonNovaLogo from '/public/amazonNovaLogo.png';
import claudeLogo from '/public/claudeLogo.png';
import openaiLogo from '/public/openaiLogo.png';
import { CaruselCardType } from '@/types/types';

type CardProps = {
  text: string;
  //TODO
  image: any;
};

const Card = ({ text, image }: CardProps) => {
  return (
    <li className={styles.cardWrapper}>
      <div className={styles.card}>
        <CaruselCard text={text} image={image} type={CaruselCardType.white} />
      </div>
    </li>
  );
};

const Circle = () => {
  return (
    <div className={styles.void}>
      <div className={styles.lastCircleShadow} />
      <div className={styles.lastCircle} />
      <div className={styles.secondCircle} />
      <ul
        className={styles.cardList}
        style={{ '--count': 6 } as React.CSSProperties}
      >
        <Card text='Claude 3.5 Sonnet' image={claudeLogo} />
        <Card text='Amazon Nova Canvas' image={amazonNovaLogo} />
        <Card text='gpt-4o-mini' image={openaiLogo} />
        <Card text='Claude 3.5 Haiku' image={claudeLogo} />
        <Card text='gpt-4o' image={openaiLogo} />
        <Card text='Amazon Nova' image={amazonNovaLogo} />
      </ul>
    </div>
  );
};

export default Circle;

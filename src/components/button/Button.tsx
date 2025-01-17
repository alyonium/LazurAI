import styles from '@/components/button/Button.module.css';

import { ReactNode } from 'react';
import { ButtonSize } from '@/types/types';
import classNames from 'classnames';

type ButtonProps = {
  text: ReactNode;
  size: ButtonSize;
};

const Button = ({ text, size }: ButtonProps) => {
  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      <span className={`button-label-${size} text-white`}>{text}</span>
    </div>
  );
};

export default Button;

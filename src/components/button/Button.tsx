// import styles from '@/components/button/Button.module.css';

import { ReactNode } from 'react';

type ButtonProps = {
  text: ReactNode;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Button;

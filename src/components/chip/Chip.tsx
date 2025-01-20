import styles from './Chip.module.css';
import { ChipType } from '@/types/types';
import classNames from 'classnames';

type ChipProps = {
  text: string;
  type: ChipType;
};

const Chip = ({ text, type }: ChipProps) => {
  return (
    <div className={classNames('label-lg', styles.wrapper, styles[type])}>
      {text}
    </div>
  );
};

export default Chip;

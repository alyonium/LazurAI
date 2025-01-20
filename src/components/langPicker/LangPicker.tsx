'use client';

import { Locale } from '@/types/types';
import styles from './LangPicker.module.css';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const LangPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(Locale.en);
  const selectRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={classNames('body-md text-blue1000', styles.select)}>
        {selectedOption}
      </div>

      {isOpen && (
        <ul className={styles.optionsList}>
          <li
            className={classNames(
              'body-md',
              styles.option,
              selectedOption === Locale.en ? styles.selectedOption : null
            )}
            onClick={() => handleOptionClick(Locale.en)}
          >
            En
          </li>
          <li
            className={classNames('body-md', styles.option)}
            onClick={() => handleOptionClick(Locale.es)}
          >
            Es
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangPicker;

'use client';

import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header');

  return <div>{t('name')}</div>;
};

export default Header;

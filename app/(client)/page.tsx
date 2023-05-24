'use client';
import React from "react";
import { useTranslation } from 'next-i18next';
type Props = {};

const Home = () => {
  const { t } = useTranslation();
  console.log(t);
  return <div>home home {t('viet_nam')}</div>;
};

export default Home;

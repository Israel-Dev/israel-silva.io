import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IsraelAnsii from '../../assets/Israel-silva-ansii.jpeg';
import { MainTitle, PageTransition } from '../../shared';

import { HomeArticle, HomeAside, HomeImage, HomeWrapper } from './Home.styled';

export const Home = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  return (
    <PageTransition>
      <HomeWrapper className="home-wrapper">
        <HomeArticle className="home-article">
          <MainTitle title="/Israel Silva" subtitle={t('solutions')} />
        </HomeArticle>
        <HomeAside className="home-aside">
          <HomeImage className="profile-image" src={IsraelAnsii} />
        </HomeAside>
      </HomeWrapper>
    </PageTransition>
  );
};

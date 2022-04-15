import React, { useEffect, useState } from 'react';
import IsraelAnsii from '../../assets/Israel-silva-ansii.jpeg';
import { MainTitle } from '../../shared';

import { HomeArticle, HomeAside, HomeImage, HomeWrapper } from './Home.styled';

export const Home = () => {
  return (
    <HomeWrapper className="home-wrapper">
      <HomeArticle className="home-article">
        <MainTitle
          title="/Israel Silva"
          subtitle="Solutions for the web, mobile and anything in between"
        />
      </HomeArticle>
      <HomeAside className="home-aside">
        <HomeImage className="profile-image" src={IsraelAnsii} />
      </HomeAside>
    </HomeWrapper>
  );
};

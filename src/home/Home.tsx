import React, { useEffect, useState } from 'react';
import Israel from '../assets/Israel-silva.jpeg';
import { MainTitle } from '../shared/';

import styles from './Home.styled';

export const Home = () => {
    return (
        <styles.HomeWrapper className="home-wrapper">
            <article className="article">
                <MainTitle
                    title="/Israel Silva"
                    subtitle="Solutions for the web, mobile and anything in between"
                />
            </article>
            <aside>
                <img className="profile-image" src={Israel} />
            </aside>
        </styles.HomeWrapper>
    );
};

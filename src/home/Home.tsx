import React, { useEffect, useState } from 'react';
import Israel from '../assets/Israel-silva.jpeg';
import MainTitleComponent from '../shared/Main-Title';
import MenuComponent from '../shared/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.styled';
import { colors } from '../utils/colors';

const Home = () => {
    return (
        <styles.HomeWrapper className="home-wrapper">
            <section className="section">
                <article className="article">
                    <MainTitleComponent
                        title="/Israel Silva"
                        subtitle="Solutions for the web, mobile and anything in between"
                    />
                </article>
                <aside>
                    <img className="profile-image" src={Israel} />
                </aside>
            </section>
        </styles.HomeWrapper>
    );
};

export default Home;

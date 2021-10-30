import React, { useEffect, useState } from 'react';

import LoadingComponent from '../Components/Loading';
import MainTitleComponent from '../Components/Main-Title';
import MenuComponent from '../Components/Menu';
import LanguagePicker from '../Components/Language-Picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from '../Components/Styles/Home-Styled';
import { colors } from '../utils/colors';

const Home = () => {
    return (
        <styles.HomeWrapper className="home-wrapper">
            <div className="content-wrapper">
                <header className="header">
                    <p className="text">Software Engineer</p>
                    <MenuComponent />
                </header>
                <section className="section">
                    <article>
                        <MainTitleComponent
                            title="/Israel Silva"
                            subtitle="Solutions for the web, mobile and anything in between"
                        />
                    </article>
                    <aside>
                        <img
                            className="profile-image"
                            src={`https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/39603559_1837694786320878_6678484505294012416_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeEIQNSNUKEA5Xw4NSY29nemwzuS0pJE9i_DO5LSkkT2L56Zt4U-IcNQXDM5m5sgumU&_nc_ohc=t-pqgSciSy8AX-43Ei0&_nc_oc=AQn45SlNvAQ3RQFX4A3m-rOXTs8tsy5TJxSfo_XutuR9b_UbnwV-XS45tky3QKoaU8c&_nc_ht=scontent.flis6-1.fna&oh=1e7cd73291dc8bd9fea699711c19373b&oe=603E741C`}
                        />
                    </aside>
                </section>
                <footer className="footer">
                    <FontAwesomeIcon
                        icon={faDownload}
                        size="2x"
                        color={colors.green}
                    />
                    <LanguagePicker />
                </footer>
            </div>
        </styles.HomeWrapper>
    );
};

export default Home;

import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { RoutePaths } from 'routes';
import { colors } from 'utils/colors';
import {
  MenuNav,
  PagesWrapper,
  PageIndex,
  PageTitle,
  MobileMenuNav,
  MobileMenuBackground,
} from './Menu.styled';

export const Menu = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'menu' });
  const history = useHistory();

  const pages: { value: string; label: string }[] = [
    { value: RoutePaths.about, label: t('about') },
    { value: RoutePaths.experience, label: t('experience') },
    { value: RoutePaths.projects, label: t('projects') },
    { value: RoutePaths.contact, label: t('contact') },
  ];

  const goToPage = (value: string) => history.push(value);

  const menuElem = pages.map((page, i) => {
    return (
      <PageTitle
        className="page-title"
        key={`${page.value}-${i}`}
        onClick={() => goToPage(page.value)}
      >
        <PageIndex className="page-index">0{i}.</PageIndex>
        {page.label}
      </PageTitle>
    );
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <MenuNav>
        <PagesWrapper className="pages-wrapper">
          <PageTitle className="page-title" onClick={() => goToPage(RoutePaths.home)}>
            <FontAwesomeIcon icon={faHome} color={colors.green} />
          </PageTitle>
          {menuElem}
        </PagesWrapper>
      </MenuNav>
      <MobileMenuNav className="mobile-menu-nav">
        <FontAwesomeIcon
          icon={faBars}
          color={colors.green}
          size="2x"
          className="mobile-menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <MobileMenuBackground className={isMobileMenuOpen ? 'visible' : ''}>
          <h1>Hey!!!</h1>
        </MobileMenuBackground>
      </MobileMenuNav>
    </>
  );
};

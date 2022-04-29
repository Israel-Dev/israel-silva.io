import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const MenuItem = ({
  page,
  onClick,
  index,
}: {
  page: { value: string; label: string };
  onClick: () => void;
  index: number;
}) => {
  return (
    <PageTitle className="page-title" onClick={onClick}>
      <PageIndex className="page-index">0{index}.</PageIndex>
      {page.label}
    </PageTitle>
  );
};

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
      <MenuItem
        key={`${page.value}-${i}`}
        onClick={() => goToPage(page.value)}
        index={i}
        page={page}
      />
    );
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let mobileMenuElem: JSX.Element[] = [];

  mobileMenuElem = [
    <MenuItem
      key={`${RoutePaths.home}-0`}
      onClick={() => {
        goToPage(RoutePaths.home);
        setIsMobileMenuOpen(false);
      }}
      index={0}
      page={{ value: RoutePaths.home, label: 'Home' }}
    />,
    ...pages.map((page, i) => {
      return (
        <MenuItem
          key={`${page.value}-${i + 1}`}
          onClick={() => {
            goToPage(page.value);
            setIsMobileMenuOpen(false);
          }}
          index={i + 1}
          page={page}
        />
      );
    }),
  ];

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
      </MobileMenuNav>
      {ReactDOM.createPortal(
        <MobileMenuBackground className={isMobileMenuOpen ? 'visible-mobile-menu' : ''}>
          {mobileMenuElem}
        </MobileMenuBackground>,
        document.getElementById('mobile-menu-portal') as Element
      )}
    </>
  );
};

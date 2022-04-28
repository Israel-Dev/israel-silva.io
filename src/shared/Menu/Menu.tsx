import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { RoutePaths } from 'routes';
import { colors } from '../../utils/colors';
import { MenuNav } from './Menu.styled';

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
      <p className="page-title" key={`${page.value}-${i}`} onClick={() => goToPage(page.value)}>
        <span className="page-index">0{i}.</span>
        {page.label}
      </p>
    );
  });

  return (
    <MenuNav>
      <div className="pages-wrapper">
        <p className="page-title" onClick={() => goToPage(RoutePaths.home)}>
          <FontAwesomeIcon icon={faHome} color={colors.green} />
        </p>
        {menuElem}
      </div>
    </MenuNav>
  );
};

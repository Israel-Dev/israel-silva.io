import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { colors } from '../../utils/colors';
import { MenuNav } from './Menu.styled';

export const Menu = () => {
    const history = useHistory();

    const pages: { value: string; label: string }[] = [
        { value: 'about', label: 'About' },
        { value: 'experience', label: 'Experience' },
        { value: 'work', label: 'Work' },
        { value: 'contact', label: 'Contact' },
    ];

    const goToPage = (value: string) => history.push(value);

    const menuElem = pages.map((page, i) => {
        return (
            <p
                className="page-title"
                key={`${page.value}-${i}`}
                onClick={() => goToPage(page.value)}
            >
                <span className="page-index">0{i}.</span>
                {page.label}
            </p>
        );
    });

    return (
        <MenuNav>
            <div className="pages-wrapper">
                <p className="page-title" onClick={() => goToPage('/')}>
                    <FontAwesomeIcon icon={faHome} color={colors.green} />
                </p>
                {menuElem}
            </div>
        </MenuNav>
    );
};

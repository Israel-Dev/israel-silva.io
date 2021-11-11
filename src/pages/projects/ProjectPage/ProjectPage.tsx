import { useHistory } from 'react-router-dom';
import { RoutePaths } from '../../../routes';
import { ProjectPageMain } from './ProjectPage.styled';

interface Props {
    id: string;
}

export const ProjectPage = ({ id }: Props) => {
    const history = useHistory();

    if (!id) history.push(RoutePaths.projects);

    return (
        <ProjectPageMain className="project-page-main">
            Project Page
        </ProjectPageMain>
    );
};

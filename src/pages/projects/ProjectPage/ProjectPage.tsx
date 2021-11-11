import { useHistory } from 'react-router-dom';
import { RoutePaths } from '../../../routes';
import { Button, TextBlock } from '../../../shared';
import {
    ProjecPageTextBlock,
    ProjectPageHeader,
    ProjectPageMain,
} from './ProjectPage.styled';

interface Props {
    id: string;
}

export const ProjectPage = ({ id }: Props) => {
    const history = useHistory();

    if (!id) history.push(RoutePaths.projects);

    return (
        <ProjectPageMain className="project-page-main">
            <ProjectPageHeader className="project-page-header">
                <ProjecPageTextBlock className="project-page-text-block">
                    <TextBlock
                        title={'< netmoreelectronics.com'}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum."
                        fullWidth={true}
                        hasUndeline={true}
                    />
                </ProjecPageTextBlock>
                <Button
                    label="Visit code base"
                    callback={() =>
                        window.open('https://netmoreelectronics.com', '_blank')
                    }
                />
            </ProjectPageHeader>
        </ProjectPageMain>
    );
};
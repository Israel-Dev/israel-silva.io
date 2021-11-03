import { Title, List } from '../../../shared';
import {
    Column,
    ColumnRightSection,
    ColumnRightHeader,
    ColumnRightArticle,
} from './Column.styled';

export const ColumnRight = () => {
    return (
        <Column className="about-column-right">
            <ColumnRightSection className="about-column-right-section">
                <ColumnRightHeader>
                    <Title
                        title={"Some technologies I'm used to:"}
                        customHeight="22px"
                    />
                </ColumnRightHeader>
                <ColumnRightArticle>
                    <List
                        items={[
                            'React',
                            'Redux',
                            'React Native',
                            'Node.JS',
                            'AWS',
                            'Docker',
                            'TypeScript <3',
                            'JavaScript',
                            'CSS',
                            'HTML',
                        ]}
                    />
                </ColumnRightArticle>
            </ColumnRightSection>
        </Column>
    );
};

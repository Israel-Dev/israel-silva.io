import { useTranslation } from 'react-i18next';
import { Title, List } from '../../../shared';
import { Column, ColumnRightSection, ColumnRightHeader, ColumnRightArticle } from './Column.styled';

export const ColumnRight = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <Column className="about-column-right">
      <ColumnRightSection className="about-column-right-section">
        <ColumnRightHeader>
          <Title title={t('some-technologies')} customHeight="22px" />
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

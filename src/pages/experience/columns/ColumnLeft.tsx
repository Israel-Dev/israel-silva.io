import { TextBlock } from '../../../shared';
import { Job } from '../Experience';
import { LeftColumnWrapper } from './Columns.styled';

export const ColumnLeft = ({
    enterpriseName,
    jobTitle,
    longDescription,
}: Job) => {
    return (
        <LeftColumnWrapper className="left-column-wrapper">
            <TextBlock
                title={'01.Experience'}
                text={longDescription}
                header={`${jobTitle} @${enterpriseName}`}
                fullWidth={true}
                hasFlickering={true}
            />
        </LeftColumnWrapper>
    );
};

import { MainTitleStyle } from './MainTitle.styled';

export const MainTitle = ({ title, subtitle }: { title?: string; subtitle?: string }) => {
  return (
    <MainTitleStyle className="main-title-wrapper">
      <h1 className="title">{title}</h1>
      {subtitle ? <h1 className="subtitle">{subtitle}</h1> : null}
    </MainTitleStyle>
  );
};

import styles from './MainTitle.styled';

export const MainTitle = (props: { title?: string; subtitle?: string }) => {
  const { title, subtitle } = props;

  return (
    <styles.mainTitle className="main-title-wrapper">
      <h1 className="title">{title}</h1>
      {subtitle ? <h1 className="subtitle">{subtitle}</h1> : null}
    </styles.mainTitle>
  );
};

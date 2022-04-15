import React from 'react';
import ReactDOM from 'react-dom';
import StyledLoading from './Loading.styled';

const loadingEl = document.getElementById('loading-portal');

export const Loading = (props: { isLoading: boolean }) => {
  const { isLoading } = props;

  if (!isLoading) {
    const el = document.querySelector('.loading-wrapper');

    if (el) setTimeout(() => el.remove(), 2500);
  }

  return (
    loadingEl &&
    ReactDOM.createPortal(
      <StyledLoading className="loading-wrapper" isLoading={isLoading}>
        <h1 className={`loading-text ${isLoading ? '' : 'hide'}`}>Loading</h1>
        <div className={`bar ${isLoading ? '' : 'hide'}`}>
          <div className={isLoading ? 'empty' : 'full'}></div>
        </div>
      </StyledLoading>,
      loadingEl
    )
  );
};

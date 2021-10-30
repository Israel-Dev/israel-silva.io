import React from 'react'
import StyledLoading from './Styles/Loading-Styled'

const LoadingComponent = (props: { isLoading: boolean }) => {
    const { isLoading } = props

    if (!isLoading) {
        const el = document.querySelector('.loading-wrapper')

        if (el) setTimeout(() => el.remove(), 2500)
    }

    return (
        <StyledLoading className="loading-wrapper" isLoading={isLoading} >
            <h1 className={`loading-text ${isLoading ? '' : 'hide'}`}>
                Loading
            </h1>
            <div className={`bar ${isLoading ? '' : 'hide'}`}>
                <div className={isLoading ? 'empty' : 'full'}></div>
            </div>
        </StyledLoading>
    )
}

export default LoadingComponent
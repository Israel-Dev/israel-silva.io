import React from 'react'
import styles from './Styles/Loading-Styled'

class LoadingComponent extends React.Component<{}, {}> {
    render(){
        return (
            <styles.Loading className="loading-wrapper">
                <h1>Loading</h1>
            </styles.Loading>
        )
    }
}

export default LoadingComponent
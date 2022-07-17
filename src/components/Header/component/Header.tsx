import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.content}>
                Slang App
            </div>
        </div >
    )
}

export default Header
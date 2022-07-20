import React from "react";
import styles from "../styles/Header.module.scss";

const Header = (): JSX.Element => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.content}>
                Slang App
            </div>
        </div>
    )
};

export default Header;
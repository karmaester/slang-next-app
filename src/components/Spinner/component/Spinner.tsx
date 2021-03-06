import React from "react";
import styles from "../styles/Spinner.module.scss";

const Spinner = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
};

export default Spinner;
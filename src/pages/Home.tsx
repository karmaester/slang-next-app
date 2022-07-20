import React from "react";
import Link from "next/link";
import Button from "@components/Button/component/Button";
import styles from "../styles/home.module.scss";
import Avatar from "@components/Avatar/component/Avatar";

const welcoming = "So nice to see you! I'm gaby, your English practicing partner. Press the start button to begin. Let's go for a new record, yay!";

const Home = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <Avatar message={welcoming} />
            </div>
            <Link href="/Main">
                <a>
                    <Button text="Start" />
                </a>
            </Link>
        </div>
    )
};

export default Home;
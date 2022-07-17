import AudioPlayer from "@components/AudioPlayer/component/AudioPlayer";
import Button from "@components/Button/component/Button";
import styles from "../styles/Main.module.scss"

const Main = () => {

    return (
        <div className={styles.container}>
            <div className={styles.audioPlayer}>
                <AudioPlayer />
            </div>
            <div className={styles.submitButton}>
                <Button text="Submit" />
            </div>
        </div>
    );
};

export default Main;

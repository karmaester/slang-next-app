import AudioPlayer from "@components/AudioPlayer/component/AudioPlayer";
import Button from "@components/Button/component/Button";
import DraggableChars from "@components/DraggableChars/component/DraggableChars";
import styles from "../styles/Main.module.scss"

const Main = () => {

    return (
        <div className={styles.container}>
            <div className={styles.audioPlayer}>
                <AudioPlayer />
            </div>
            <DraggableChars />
            <div className={styles.submitButton}>
                <Button text="Submit" />
            </div>
        </div>
    );
};

export default Main;

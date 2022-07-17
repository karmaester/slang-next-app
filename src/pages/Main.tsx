import AudioPlayer from "@components/AudioPlayer/component/AudioPlayer";
import Button from "@components/Button/component/Button";
import DraggableChars from "@components/DraggableChars/component/DraggableChars";
import { useState } from "react";
import styles from "../styles/Main.module.scss"

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [word, setWord] = useState("hi")
    const [currentAudio, setCurrentAudio] = useState("test")

    if (loading) return <>Loading</>

    const fetchNewWord = async () => {
        setLoading(true);
        await fetch('https://api.demo.slangapp.com/recruitment/spelling')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWord(data["letter-pool"])
                setCurrentAudio(data["audio-url"])
                console.log("data[letter-pool]: ", data["letter-pool"]);
                console.log("data[audio-url]: ", data["audio-url"]);
                setLoading(false);
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.audioPlayer}>
                <AudioPlayer audio={currentAudio} />
            </div>
            <DraggableChars />
            <div className={styles.submitButton}>
                <Button text="Submit" onClickHandler={() => fetchNewWord()} />
            </div>
        </div>
    );
};

export default Main;

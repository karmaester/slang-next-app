import AudioPlayer from "@components/AudioPlayer/component/AudioPlayer";
import Button from "@components/Button/component/Button";
import DraggableChars from "@components/DraggableChars/component/DraggableChars";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "../styles/Main.module.scss"

const mockData = {
    id: 276089,
    "audio-url": "https://cdn.slangapp.com/sounds/b983dfac78e8536e7b74e23126c0acd95ccf9e3c/normalized.mp3",
    "letter-pool": ["o", "c", "i", "o", "d", "c", "u", "t", "n", "n"]
}

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [word, setWord] = useState<string[]>([]);
    const [currentAudio, setCurrentAudio] = useState<string>("");
    const [initialFetch, setInitialFetch] = useState(true);
    const [userResponse, setUserResponse] = useState();


    if (loading) return <>Loading</>

    const fetchNewWord = async () => {
        setLoading(true);
        await fetch('https://api.demo.slangapp.com/recruitment/spelling')
            .then(response => response.json())
            .then(data => {
                setInitialFetch(false);
                setWord(data["letter-pool"])
                setCurrentAudio(data["audio-url"])
                setLoading(false);
            }).catch(error => {
                console.log(error)
                setInitialFetch(false);
                setWord(mockData["letter-pool"])
                setCurrentAudio(mockData["audio-url"])
                setLoading(false);
            });
    };

    useEffect(() => {
        console.log("userResponse: ", userResponse);
    }, [userResponse]);

    if (initialFetch) fetchNewWord();

    return (
        <>
            <div className={styles.exitButtonContainer}>
                <Link href="/Home">
                    <a className={styles.exit}>
                        <IoMdArrowRoundBack />
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.audioPlayer}>
                    <AudioPlayer audio={currentAudio} />
                </div>
                <DraggableChars word={word} changeHandler={setUserResponse} />
                <div className={styles.submitButton}>
                    <Button text="Submit" onClickHandler={() => fetchNewWord()} />
                </div>
            </div>
        </>
    );
};

export default Main;

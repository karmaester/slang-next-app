import AudioPlayer from "@components/AudioPlayer/component/AudioPlayer";
import Avatar from "@components/Avatar/component/Avatar";
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
    const [wordId, setWordId] = useState<number>()
    const [currentAudio, setCurrentAudio] = useState<string>("");
    const [initialFetch, setInitialFetch] = useState(true);
    const [userResponse, setUserResponse] = useState();
    const [canMoveOn, setCanMoveOn] = useState(false)


    if (loading) return <>Loading</>

    const fetchNewWord = async () => {
        setLoading(true);
        await fetch('https://api.demo.slangapp.com/recruitment/spelling')
            .then(response => response.json())
            .then(data => {
                setInitialFetch(false);
                setCanMoveOn(false);
                setWord(data["letter-pool"])
                setCurrentAudio(data["audio-url"])
                setWordId(data.id);
                setLoading(false);
            }).catch(error => {
                // In case of service failure, set default values
                console.log(error)
                setInitialFetch(false);
                setCanMoveOn(false);
                setWord(mockData["letter-pool"])
                setWordId(mockData.id);
                setCurrentAudio(mockData["audio-url"])
                setLoading(false);
            });
    };

    const validateResponse = async () => {
        const requestOptions: {
            method: string;
            redirect: RequestRedirect | undefined;
        } = {
            method: 'POST',
            redirect: 'follow'
        };
        await fetch(`https://api.demo.slangapp.com/recruitment/spelling/?id=${wordId}&answer=${userResponse}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                setCanMoveOn(true);
            })
            .catch(error => console.log('error', error));
    }

    // useEffect(() => {
    //     console.log("userResponse: ", userResponse);
    // }, [userResponse]);

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
                <Avatar />
                <div className={styles.audioPlayer}>
                    <AudioPlayer audio={currentAudio} />
                </div>
                <DraggableChars word={word} changeHandler={setUserResponse} />
                <div className={styles.submitButton}>
                    {canMoveOn ?
                        <Button text="Next word" onClickHandler={() => fetchNewWord()} />
                        :
                        <Button text="Submit" onClickHandler={() => validateResponse()} />
                    }
                </div>
            </div>
        </>
    );
};

export default Main;

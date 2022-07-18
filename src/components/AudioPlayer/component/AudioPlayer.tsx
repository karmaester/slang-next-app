import React from "react";
import useSound from "use-sound";
import Image from "next/image";
import soundWave from "../images/sound-wave.png"
import { AiOutlinePlayCircle } from "react-icons/ai";
import styles from "../styles/AudioPlayer.module.scss"


const AudioPlayer = ({ audio }: { audio: string }) => {
    const [playSound] = useSound(audio)

    return (
        <button className={styles.audioPlayer} onClick={() => playSound()}>
            <div className={styles.imagesContainer}>
                <AiOutlinePlayCircle />
                <Image
                    // loader={myLoader}
                    src={soundWave}
                    alt="Picture of the author"
                    width={100}
                    height={50}
                />
            </div>
        </button>
    )
}

export default AudioPlayer;
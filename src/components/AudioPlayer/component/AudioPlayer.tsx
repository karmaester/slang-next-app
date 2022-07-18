import React from "react";
import useSound from "use-sound";
import Image from "next/image";
import soundWave from "../images/sound-wave.png"


const AudioPlayer = ({ audio }: { audio: string }) => {
    const [playSound] = useSound(audio)

    return (
        <button onClick={() => playSound()}>
            <Image
                // loader={myLoader}
                src={soundWave}
                alt="Picture of the author"
                width={100}
                height={50}
            />
        </button>
    )
}

export default AudioPlayer;
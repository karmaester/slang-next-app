import React from "react";
import useSound from "use-sound";
import Image from "next/image";
import soundWave from "../images/sound-wave.png"


const AudioPlayer = () => {
    const [playSound] = useSound("https://cdn.slangapp.com/sounds/71e760668ef2feab99202dbc80b734c04a50f079/normalized.mp3")

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
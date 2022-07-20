import React, { useEffect, useState } from 'react'
import Image from "next/image";
import smile from "../images/smile.svg";
import blink from "../images/blink.svg";
import talk from "../images/talk.svg";
import styles from "../styles/Avatar.module.scss"

const Avatar = ({ message }: any) => {
    const [talks, setTalks] = useState(false);
    const [blinks, setBlinks] = useState(false);
    const [displayedText, setDisplaytext] = useState<string>("")

    const displayLetterByLetter = () => {
        let i = 0;
        let temp = "";
        const arr = Array.from(message)
        const interval = setInterval(() => {
            if (i % 5 == 0) {
                setTalks(true)
            }
            if (i % 8 == 0) {
                setTalks(false)
            }
            temp += message.split("")[i]
            i++;
            if (i > arr.length - 2) {
                setBlinks(true)
            }
            if (i > arr.length) {
                clearInterval(interval);
                setBlinks(false)
            } else {
                setDisplaytext(temp);
            }
        }, 50);
    }

    useEffect(() => {
        displayLetterByLetter();
    }, [message])

    return (
        <>
            <div className={styles.imagesContainer}>
                <div>
                    <Image
                        src={smile}
                        alt="Picture of the author"
                        width={350}
                        height={150}
                    />
                </div>
                <div className={talks ? styles.show : styles.hide}>
                    <Image
                        src={talk}
                        alt="Picture of the author"
                        width={350}
                        height={150}
                    />
                </div>
                <div className={blinks ? styles.show : styles.hide}>
                    <Image
                        src={blink}
                        alt="Picture of the author"
                        width={350}
                        height={150}
                    />
                </div>
            </div>
            <div className={styles.dialog}>
                {displayedText}
            </div>
        </>
    )
}

export default Avatar
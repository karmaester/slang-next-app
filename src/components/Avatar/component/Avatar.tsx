import React, { useEffect, useState } from 'react'
import Image from "next/image";
import smile from "../images/smile.svg";
import blink from "../images/blink.svg";
import talk from "../images/talk.svg";
import styles from "../styles/Avatar.module.scss"

const Avatar = ({ message }: any) => {
    const [talks, setTalks] = useState(false);
    const [blinks, setBlinks] = useState(false);
    const [mustTalk, setMustTalk] = useState(true);

    const displayLetterByLetter = () => {
        let i = 0;
        const arr = Array.from(message)
        const interval = setInterval(() => {
            console.log("out")
            if (i % 2 == 0) {
                setTalks(true);
            }
            if (i % 2 != 0) {
                setTalks(false);
            }
            i++;
            if (i > arr.length - 2) {
                setBlinks(true)
            }
            if (i > arr.length) {
                clearInterval(interval);
                setBlinks(false)
            }
        }, 250);
    }

    useEffect(() => {
        if (mustTalk) {
            displayLetterByLetter();
            setMustTalk(false)
        }
    }, [message])

    return (
        <>
            <div className={styles.imagesContainer}>
                <div>
                    <Image
                        src={smile}
                        alt="Picture of the author"
                        width={300}
                        height={150}
                    />
                </div>
                <div className={talks ? styles.show : styles.hide}>
                    <Image
                        src={talk}
                        alt="Picture of the author"
                        width={300}
                        height={150}
                    />
                </div>
                <div className={blinks ? styles.show : styles.hide}>
                    <Image
                        src={blink}
                        alt="Picture of the author"
                        width={300}
                        height={150}
                    />
                </div>
            </div>
        </>
    )
}

export default Avatar
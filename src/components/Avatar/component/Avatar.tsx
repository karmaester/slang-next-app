import React from 'react'
import Image from "next/image";
import avatar from "../images/smile.svg";

const Avatar = () => {


    return (
        <div>
            <Image
                src={avatar}
                alt="Picture of the author"
                width={300}
                height={150}
            />
        </div>
    )
}

export default Avatar
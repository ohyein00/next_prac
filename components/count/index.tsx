'use client'
import {useState} from "react";

export default function Count() {

    const [number, setNumber] = useState<number>(0)
    return (
        <>
            <button onClick={() => {
                setNumber(number + 1)
            }}>
                숫자 증가!
            </button>
            <p>
                {number}
            </p>
        </>
    )
}
import Layout from "../../components/layout";
import {getSortedPostsData} from "../../lib/posts";
import React, {useEffect, useState} from "react";

export default function Home(props) {
    const [text, setText] = useState<string>("자바스크립트");
    useEffect(() => {
        setTimeout(() => {
            setText("타입스크립트")
        }, 1000)
        console.log('props', props)
    }, [])


    return (
        <>
            <div className="container">
                <div>
                    <span>{text} 적용 완료</span>
                </div>
            </div>
        </>
    );
}



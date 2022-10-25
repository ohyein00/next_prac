import React, {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Posts(props) {
    const [text, setText] = useState<string>("자바스크립트");
    useEffect(()=>{
        setTimeout(() => {
            setText("타입스크립트")
        }, 1000)
        console.log('props',props)
    },[])


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
export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = '...'

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: ''
    }
}
import Layout from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import {siteTitle} from "../components/layout";
import Link from "next/link";
import MyLink from "../components/myLink";
import {useState} from "react";
import Count from "../components/count";
export default function Home() {

    const allPostsData = getSortedPostsData()
    const subSiteTitle = 'Next.js with Redux'
    const siteIntroduce = '목표 : next.js랑 redux로 깃 이슈 가져오는 스크랩북 만들기'
    const history = '20221026 ) next.js tutorial chp.Dynamic Routes'
    const skillSet = 'Next.js / Ts / Redux'
    return (
        <>
            <Layout home>
                <h1>{siteTitle}</h1>
                <hr/>
                <section>
                    <h2>Issue List</h2>
                    <div>
                       <Count/>
                       <Count/>
                    </div>
                    <ul>
                        {allPostsData.map(({id, date, title}) => (
                            <li key={id}>
                                <Link href={`/post/${id}`} passHref legacyBehavior>
                                    <MyLink>
                                        <>
                                            {title}
                                            <br/>
                                            {id}
                                            <br/>
                                            {date}
                                        </>
                                    </MyLink>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <hr/>
                <section>
                    <h3>{subSiteTitle}</h3>
                    <p>{siteIntroduce}</p>
                    <p>- {skillSet}</p>
                    <p><b>진행상황</b></p>
                    <p>{history}</p>
                </section>
            </Layout>
        </>
    )
}

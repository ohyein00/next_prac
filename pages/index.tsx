import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import {siteTitle} from "../components/layout";

export default function Home({allPostsData}) {
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
                    <ul>
                        {allPostsData.map(({id, date, title}) => (
                            <li key={id}>
                                {title}
                                <br/>
                                {id}
                                <br/>
                                {date}
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

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
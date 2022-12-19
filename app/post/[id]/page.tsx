import Layout from "../../../components/layout";
import {getAllPostIds, getPostData} from '../../../lib/posts'
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from '../../../styles/utils.module.css'

async function getPosts(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)
    return res.json()
}

export default async function Post({ params }) {
    const getPostsData = getPosts(params.id)
    const postsData = await getPostsData
    console.log()
    return (
        `${postsData.data.title}`
        /*
        <Layout>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title}/>
            </Head>
            <h3 className={utilStyles.headingXl}>{title}</h3>
            <p>{id} | <Date dateString={date}/></p>
            <hr/>
            <div dangerouslySetInnerHTML={{__html: contentHtml}}/>

        </Layout>*/
    )
}

import Layout from "../../../components/layout";
import {getAllPostIds, getPostData} from '../../../lib/posts'
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from '../../../styles/utils.module.css'

export default async function Post({params}) {

    const paths = getAllPostIds()
    const postData = await getPostData(params.id);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta property="og:title" content={postData.title}/>
            </Head>
            <h3 className={utilStyles.headingXl}>{postData.title}</h3>
            <p>{postData.id} | <Date dateString={postData.date} /></p>
            <hr/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>

        </Layout>
    )
}

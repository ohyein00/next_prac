import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'

/**
 * getInitialProps - v9이후 아래의 메소드를 사용하게 했음
 * 장점 : 속도가 빨라집니다. 서버는 data fetching만,
 *       브라우저는 렌더링만 함으로 연산을 브라우저와 서버가 각각 나누어 분담하게되어 그만큼 속도가 빨라집니다.
 *       (CSR의 경우 date-fetching과 렌더를 둘다 클라이언트 사이드에서 함)
 *
 * getStaticPaths : 다이나믹라우트를 위한 페이지일 경우 빌드 시에 static 하게 생성할 path를 정함.
 * getStaticProps : 빌드 시 데이터를 fetch하여 static 페이지를 생성. 빌드 이후 값 변경 불가
 * getServerSideProps : 컴포넌트에 props를 넘겨준다는 공통점이 있지만, 빌드 시가 아닌 매 request마다 실행.
 *                      자주 업데이트 되는 데이터가 표시 될 경우. 초기 SEO랑 관련 없을 경우. but 미리 그려서 보여주는게 필요없음 안해도 됨.
 *                      남발하면 서버가 모든 요청을 계산하고 캐쉬가 힘들어 비효율적.
 *                      서버에서 데이터패치를 하기때문에 client로부터 api 정보를 숨길 수 있음
 */

export default function Post({postData}) {
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

export async function getStaticPaths() { //
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) { //
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}


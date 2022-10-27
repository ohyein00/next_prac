import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import {ReactNode} from "react";
import myLink from "../myLink";

const name = 'Yein'
export const siteTitle = `${name}'s Git Scrap Book`

/**
 *  ** next/Head
 *  어디에 있던 시멘틱 구조에 맞추어 실제 head에 구성되어짐
 *  중복 태그가 있다면 가장 하위 컴포넌트의 Head로 덮어씌워진다.
 *  그러나 next/document를 사용해 head를 구성하면 중복되어 오류가 생김 [https://nextjs.org/docs/advanced-features/custom-document]
 *  head Hoc 라는 구조로 각 페이지에 맞는 meta 구조를 생성할 수 있음
 *  참고 블로그글 : https://velog.io/@cyranocoding/NEXT-HEAD-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC
 *
 *  하지만 동적으로 구성해야 하는 경우엔 getInitialProps를 이용해 돔이 구성되기 전 값을 받아 static하게 내보내줘야함 ---> nextv9 이후 getStaticProps, getStaticPaths, getServerSideProps로 바뀜
 *  https://kyounghwan01.github.io/blog/React/next/dynamic-meta/
 */


export default function Layout({ children, home }:{children:ReactNode,home?:boolean}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        ← Back to home
                    </Link>
                </div>
            )}
        </div>
    )
}
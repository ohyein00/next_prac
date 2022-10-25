import { AppProps } from 'next/app'
import Posts from "./posts";
import Layout from "../components/layout";

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default App
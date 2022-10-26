import { AppProps } from 'next/app'
import Layout from "../components/layout";

function App({ Component, pageProps }: AppProps) {
    return (
            <Component {...pageProps}/>
    )
}

export default App
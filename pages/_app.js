import { useRouter } from 'next/router'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  return <div className='container'>
    <Component {...pageProps} />
    </div>
}

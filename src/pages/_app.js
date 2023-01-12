import { AuthProvider } from "../context/auth";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Nav from "../components/common/Nav";
import "../styles/globals.css";
import SignButton from "../components/common/SignButton";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="container">
        <div className={styles.description}>
          <p>
            <Link href={"/"}>
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={24}
                priority
              />
            </Link>
            &nbsp;&nbsp;&nbsp;Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div className={styles.admBtn}>
            <SignButton />
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

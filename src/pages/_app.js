import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Navbar from '../components/Layout/Navbar';
import '../styles/tailwind.css';

Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ['/register', '/login'];
  const authRoute = authRoutes.includes(pathname);

  return (
    <>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

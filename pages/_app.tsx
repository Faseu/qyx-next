import '@/styles/globals.css';
import './home/index.scss';
import 'animate.css';
import 'hover.css/css/hover-min.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

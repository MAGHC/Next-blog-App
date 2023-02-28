import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="MAGHC"></meta>
        <meta name="description" content="Portfolio for MAGHC" />
        <meta name="next-head-count" />
      </Head>
      <body
        className="  scrollbar-thin scrollbar-thumb-highLightSub scrollbar-track-slate-700
      "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

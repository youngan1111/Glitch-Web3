import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <div id="portal-toast" />
        <NextScript />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
          rel="stylesheet"
        />
      </body>
    </Html>
  );
}

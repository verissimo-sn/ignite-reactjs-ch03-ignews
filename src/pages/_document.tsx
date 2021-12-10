import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDcoumente extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <title>ig.news</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
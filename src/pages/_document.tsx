import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://wet-boew.github.io/wet-boew/wet-boew/js/wet-boew.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

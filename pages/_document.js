import Document, { Html, Head, Main, NextScript } from "next/document";

/* NE PAS TOUCHER SVP 
NE PAS TOUCHER SVP 
NE PAS TOUCHER SVP 
NE PAS TOUCHER SVP 
*/
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head crossOrigin="anonymous"></Head>
        <body>
          <Main />
          <NextScript crossOrigin="anonymous" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

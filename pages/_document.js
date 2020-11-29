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
        <Head>
          <meta charset="UTF-8"></meta>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:image" content="/images/Logo_TIM.png" />
          <meta property="og:locale" content="fr_FR" />
          <meta
            property="og:site_name"
            content="Techniques d'Intégration Multimédia | Collège Maisonneuve"
          />
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

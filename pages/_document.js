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
          <meta charSet="UTF-8"></meta>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:image" content="/images/Logo_TIM.png" />
          <meta property="og:locale" content="fr_FR" />
          <meta
            property="og:site_name"
            content="Techniques d'Intégration Multimédia | Collège Maisonneuve"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#000000"></meta>
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

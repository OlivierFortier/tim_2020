import Head from "next/head";
import Accueil from "../components/accueil";

export default function Home() {
  return (
    <div className="conteneur-page">
      <Head>
        <title>TIM | Accueil</title>
        <meta
          name="Description"
          content="Page d'acceuil des Techniques d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/"></link>
      </Head>

      
        <Accueil />
      

      {/*il est préférable que vous utlisiez du css "local" et non "global"
      Cela fait que le css n'affecte rien d'autre que cette page, ce composant ou ce fichier, ce qui évite les erreurs.
      Cela se fait facilement à même le fichier js en utilisant la balise style jsx
      comme ci-dessous. .*/}
      <style jsx>{`
        .conteneur-page {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 1500px;
        }
      `}</style>
    </div>
  );
}

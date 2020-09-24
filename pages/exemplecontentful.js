
import Head from "next/head"

//j'importe ma fonction pour faire des requêtes GraphQl par AJAX
import { faireRequeteGql } from "../libs/requetesDonnes";
import { gql } from "graphql-request";

export default function ExempleContentful({ listeProfs }) {
    //j'organise mes données que j'ai récupérées de ma requête en bas dans la fonction getStaticProps
  const lesProfs = listeProfs.professeurCollection.items;

  return (
    <>
      <Head>
        <title>TIM | Exemple Contentful</title>
        <meta
          name="Description"
          content="Page de test et d'exemple pour le CMS contentful"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/exemplecontentful"></link>
      </Head>

      <div style={{ color: "white" }}>
        <h1>Liste des profs</h1>
        <ul>
          {//je fais une boucle sur les professeurs avec la méthode .map
          lesProfs.map((prof, index) => {
            //pour chaque prof, je retourne du html/jsx avec les données que je veux afficher
            return (
              <li key={index}>
                <ul>
                  <li>{prof.nom}</li>
                  <li>{prof.description}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  //je définis ma requete au cms, je veux les noms et les descriptions des professeurs
  const requeteGql = gql`
    {
      professeurCollection {
        items {
          nom
          description
        }
      }
    }
  `;
  //j'effectue ma requete
  const listeProfs = await faireRequeteGql(requeteGql);

  //je retourne les résultats de ma requête dans un objet "props" qui sera utilisé comme argument de la page
  return {
    props: {
      listeProfs,
    },

    revalidate: 1,
  };
}

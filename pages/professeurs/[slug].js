import { gql } from "graphql-request";
import Prof from "../../components/prof";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Head from "next/head";

//les pages qui contiennent des [] dans le nom signifient qu'elle servent à générer des pages
//on va simplement chercher les données des sources ou on veut pour créer les pages selont ces données
//et on décris la forme qu'on veut que toutes ces pages aient.
//en l'occurence, on veut que chacune de ces pages aient un composant Prof
export default function PageProfesseur(leProf) {
  return (
    <>
      <Head>
        <title>TIM | {leProf.professeurCollection.items[0].nom}</title>
        <meta
          name="Description"
          content={`Page du professeur ${leProf.professeurCollection.items[0].nom} des Techniques d'Intégration Multimédia du collège Maisonneuve`}
        ></meta>
        <link
          rel="canonical"
          href={`https://tim-2020.vercel.app/professeurs/${leProf.professeurCollection.items[0].slug}`}
        ></link>
      </Head>

      <Prof unProf={leProf} />

      <style jsx>{`
        div {
          color: white;
        }
      `}</style>
    </>
  );
}

//avec la fonction getStaticProps on va chercher les données nécéssaires pour afficher une page donnée
export async function getStaticProps({ params }) {
  //je prépare une requete gql afin d'avoir les données d'un professeurs selon l'url. ex : /professeurs/camille
  const requeteGql = gql`
    query Professeurs($slug: String!) {
      professeurCollection(where: { slug: $slug }) {
        items {
          nom
          description
          slug
        }
      }
    }
  `;

  //je prépare les variables a mettre dans ma requete
  const lesVariables = { slug: params.slug };

  //j'effectue ma requete avec les variables
  const leProf = await faireRequeteGql(requeteGql, lesVariables);

  //je retourne ces données pour les utiliser dans mon html/jsx
  //avec Next.js , je peux re-valider mes données à un certain intervalle. La page est générée,
  //mais à chaque seconde ca vérifie si les données sont à jour, et si non, va ré-hydrater la page avec les dernières données
  return { props: leProf, revalidate: 1 };
}

//la fonction getStaticPaths sert a générer des pages selons des données
export async function getStaticPaths() {
  //je prépare ma requete gql. Je veux obtenir les "slug" de chaque professeurs
  //afin de générer 1 page pour chaque professeur.
  const requeteGqlSlug = gql`
    {
      professeurCollection {
        items {
          slug
        }
      }
    }
  `;

  //j'envoie ma requete
  const donnees = await faireRequeteGql(requeteGqlSlug);

  //j'organise les données que j'ai recues de ma requete
  const listeProfs = donnees.professeurCollection.items;

  //je trie dans un tableau avec une boucle .map() les données encore pour n'avoir que les slugs.
  const slugs = listeProfs.map((prof) => prof.slug);

  //je crée un tableau d'objets avec une boucle .map() dans laquelle a chaque position il y a params : { le slug du prof }
  const paths = slugs.map((slug) => ({ params: { slug } }));

  //pour créer les pages, il faut que je retourne les paths ( chemins ) que je veux créer dans un array qu'on a fait précédemment.
  return {
    paths,
    //fallback indique si oui ou non on veut créer une page d'erreur nous-même.
    fallback: false,
  };
}

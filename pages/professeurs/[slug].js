import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";

export default function PageProfesseur(leProf) {
  return (
    <>
      <div>
        <h1>Bienvenue chez {leProf.nom}</h1>
        <p>{leProf.description}</p>
      </div>
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
        }
      }
    }
  `;




//je prépare les variables a mettre dans ma requete
  const lesVariables = { slug: params.slug };

//j'effectue ma requete avec les variables
  const donnees = await faireRequeteGql(requeteGql, lesVariables);


  //j'organise les données recues
  const leProf = donnees.professeurCollection.items[0];

  //je retourne ces données pour les utiliser dans mon html/jsx
  //avec Next.js , je peux re-valider mes données à un certain intervalle. La page est générée,
  //mais à chaque seconde ca vérifie si les données sont à jour, et si non, va ré-hydrater la page avec les dernières données
  return { props: leProf, revalidate: 1 };
}

//la fonction getStaticPaths sert
export async function getStaticPaths() {

    //je prépare ma requete gql. Je veux obtenir les "slug" de chaque professeurs
    //afin de générer 1 page pour chaque professeur.
  const requeteGql = gql`
    {
      professeurCollection {
        items {
          slug
        }
      }
    }
  `;

    //j'envoie ma requete
  const donnees = await faireRequeteGql(requeteGql);

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

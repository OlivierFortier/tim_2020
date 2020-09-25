import { gql } from "graphql-request";
import Prof from "../../components/prof";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Modal from "react-modal";
import useSWR from "swr";
import { useEffect } from "react";
import { useRouter } from "next/router";

//configuration pour le modal
Modal.setAppElement("#__next");

export default function PageProfesseur(leProf) {

    const router = useRouter()

  return (
    <>
      <Prof slug={router.query.slug} />

      <style jsx>{`
        div {
          color: white;
        }
      `}</style>
    </>
  );
}

//avec la fonction getServerSideProps on va chercher les données nécéssaires pour afficher une page donnée
export async function getServerSideProps(context) {
  //je prépare les variables a mettre dans ma requete
  const lesVariables = { slug: context.params.slug };

  //je prépare une requete gql afin d'avoir les données d'un professeurs selon l'url. ex : /professeurs/camille
  const requeteGql = gql`
    query Professeurs($slug: String!) {
      professeurCollection(where: { slug: $slug }) {
        items {
          slug
        }
      }
    }
  `;

  //j'effectue ma requete avec les variables
  const leProf = await faireRequeteGql(requeteGql, lesVariables);

  //je retourne ces données pour les utiliser dans mon html/jsx
  //avec Next.js , je peux re-valider mes données à un certain intervalle. La page est générée,
  //mais à chaque seconde ca vérifie si les données sont à jour, et si non, va ré-hydrater la page avec les dernières données
  return { props: leProf};
}

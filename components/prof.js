import { gql } from "graphql-request";
import { useRouter } from "next/router";
import { useState } from "react";
import { faireRequeteGql } from "../libs/requetesDonnes";
import useSWR from "swr";

export default function Prof({ slug }) {


  const router = useRouter();
  const { data: result, error : eaps } = useSWR([requeteGql, { slug: router.query.slug }], faireRequeteGql, {
    revalidateOnFocus: true,
    revalidateOnMount:false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

  useState(()=> {
      //FINIR LE CRISSE DE PROBLEME
  })

  if(eaps) return <div>Error...</div>

  if(!result) return <div>Loading...</div>

  return (
    <>
      <div>
          
        bonjour je m'affiche
        {result && <h1>{result.professeurCollection.items[0].nom}</h1>}
        {/* <p>{unProf.description}</p> */}
      </div>

      <style jsx>{`
        div {
          background-color: black;
          color: white;
        }
      `}</style>
    </>
  );
}

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

import { faireRequeteGql } from "../../libs/requetesDonnes";
import Link from "next/link";
import { gql } from "graphql-request";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Prof from "../../components/prof";
import { useEffect, useState } from "react";
import useSWR from "swr";

//configuration pour le modal
Modal.setAppElement("#__next");

export default function Professeurs({ listeProfs }) {
  //j'ai besoin des fonctionnalités du routeur alors j'importe ce module et je l'initialise
  const router = useRouter();

  //j'organise mes données pour avoir seulement ce que j'ai besoin dans le json reçu en props/arguments
  const lesProfs = listeProfs.professeurCollection.items;

  return (
    <>
      <div>
        <h1>Voici la page des professeurs</h1>
        <ul>
          {lesProfs.map((prof, index) => {
            return (
              <li key={prof.slug + index}>
                <Link
                  href={`/professeurs/?slug=${prof.slug}`}
                  as={`/professeurs/${prof.slug}`}
                >
                  <a>{prof.nom}</a>
                </Link>
              </li>
            );
          })}
        </ul>

        <Modal
          parentSelector={() =>
            document.querySelector("#conteneur-application")
          }
          isOpen={!!router.query.slug}
          contentLabel="Post modal"
        >
          <h1>allo</h1>
          <Prof slug={router.query.slug}/>
        </Modal>
      </div>
      <style jsx>{`
        div {
          color: white;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const requeteGqlTousLesProfs = gql`
    {
      professeurCollection {
        items {
          nom
          slug
        }
      }
    }
  `;

  const listeProfs = await faireRequeteGql(requeteGqlTousLesProfs);

  return {
    props: {
      listeProfs,
    },
    revalidate: 1,
  };
}

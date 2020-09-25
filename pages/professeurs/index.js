import { faireRequeteGql } from "../../libs/requetesDonnes";
import Link from "next/link";
import {gql} from "graphql-request"

export default function Professeurs({ listeProfs }) {
  const lesProfs = listeProfs.professeurCollection.items;
  return (
    <>
      <div>
        <h1>Voici la page des professeurs</h1>
        <ul>
          {lesProfs.map((prof, index) => {
            return (
              <li key={prof.slug + index}>
                <Link href={`/professeurs/[slug]`} as={`/professeurs/${prof.slug}`}>
                  <a>{prof.nom}</a>
                </Link>
              </li>
            );
          })}
        </ul>
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
  const requeteGql = gql`
    {
      professeurCollection {
        items {
          nom
          slug
        }
      }
    }
  `;

  const listeProfs = await faireRequeteGql(requeteGql);

  return {
    props: {
      listeProfs,
    },
    revalidate: 1,
  };
}

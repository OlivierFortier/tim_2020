//j'importe ma fonction pour faire des requêtes GraphQl par AJAX
import { faireRequeteGql } from "../libs/requetesDonnes";
import { gql } from "graphql-request";

export default function ExempleContentful({ listeProfs }) {
  const lesProfs = listeProfs.professeurCollection.items;

  return (
    <div style={{ color: "white" }}>
      <h1>Liste des profs</h1>
      <ul>
        {lesProfs.map((prof, index) => {
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
  );
}

export async function getStaticProps() {
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

  const listeProfs = await faireRequeteGql(requeteGql);

  return {
    props: {
      listeProfs,
    },

    revalidate: 1,
  };
}

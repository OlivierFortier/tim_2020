import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NomCours from "../components/cours/nomCours";
import { gql } from "graphql-request";
import { faireRequeteGql, graphQLClient } from "../libs/requetesDonnes";
import { resetIdCounter } from "react-tabs";

resetIdCounter();

export default function Cours({ listeCours }) {
  //on extrait la liste des cours et on la sépare par session
  const coursSession1 = listeCours.filter((cours) => cours.session === 1);
  const coursSession2 = listeCours.filter((cours) => cours.session === 2);
  const coursSession3 = listeCours.filter((cours) => cours.session === 3);

  //on trie les session qui ont des choix de cours
  const coursSession4 = listeCours.filter((cours) => cours.session === 4);
  const coursSession4Tries = [...coursSession4].sort((a,b) => a.auChoix - b.auChoix);
  const coursSession5 = listeCours.filter((cours) => cours.session === 5);
  const coursSession5Tries = [...coursSession5].sort((a,b) => a.auChoix - b.auChoix);

  const coursSession6 = listeCours.filter((cours) => cours.session === 6);

  //regrouper tous les sessions dans 1 array
  const tousLesCours = [
    coursSession1,
    coursSession2,
    coursSession3,
    coursSession4Tries,
    coursSession5Tries,
    coursSession6,
  ];

  //TODO : séparer les cours qui sont un choix de l'élève
  //TODO : trier les cours selon le select

  return (
    <div>
      <h1>La liste des cours</h1>
      <h2>
        J'aime bien
        <select>
          <option>de tout</option>
          <option>les jeux</option>
          <option>le web</option>
          <option>le design</option>
          <option>la programmation</option>
          <option>la vidéo</option>
        </select>
      </h2>
      <Tabs>
        <TabList>
          <Tab>Session 1</Tab>
          <Tab>Session 2</Tab>
          <Tab>Session 3</Tab>
          <Tab>Session 4</Tab>
          <Tab>Session 5</Tab>
          <Tab>Session 6</Tab>
        </TabList>

        {/* double boucle sur les cours de toutes les sessions pour les afficher par session */}
        {tousLesCours.map((session, indexSession) => {
          return (
            <TabPanel key={Math.random() * indexSession}>
              { session.map((cours, indexCours) => {
                
                return (
                  <NomCours
                    key={Math.random() * indexCours}
                    infoCours={cours}
                  />
                );
              })}
            </TabPanel>
          );
        })}
      </Tabs>

      <style jsx>{``}</style>
    </div>
  );
}

//on va chercher nos données du CMS dans cette fonction pour les passer en props
export async function getStaticProps() {
  //je prépare ma requete graphQl pour avoir la liste des noms et des slugs de tous les cours
  const requeteGqlTousLesCours = gql`
    {
      coursCollection {
        items {
          titre
          session
          auChoix
          choixEntre {
            titre
          }
          type
        }
      }
    }
  `;

  //je fais ma requete
  const res = await faireRequeteGql(requeteGqlTousLesCours);
  const listeCours = res.coursCollection.items;

  //je retourne la liste des cours, et je revalide à chaque seconde
  return {
    props: {
      listeCours,
    },
    revalidate: 1,
  };
}

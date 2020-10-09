import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NomCours from "../components/cours/nomCours";
import { gql } from "graphql-request";
import { faireRequeteGql, graphQLClient } from "../libs/requetesDonnes";
import { resetIdCounter } from "react-tabs";
import { useState } from "react";
import DetailsCours from "../components/cours/detailsCours";



export default function Cours({ listeCours }) {

  //on extrait la liste des cours et on la sépare par session
  const coursSession1 = listeCours.filter((cours) => cours.session === 1);
  const coursSession2 = listeCours.filter((cours) => cours.session === 2);
  const coursSession3 = listeCours.filter((cours) => cours.session === 3);
  const coursSession6 = listeCours.filter((cours) => cours.session === 6);

  //on trie les session qui ont des choix de cours
  const coursSession4 = listeCours.filter((cours) => cours.session === 4);
  const coursSession4Tries = [...coursSession4].sort( (a, b) => a.auChoix - b.auChoix );
  const coursSession5 = listeCours.filter((cours) => cours.session === 5);
  const coursSession5Tries = [...coursSession5].sort( (a, b) => a.auChoix - b.auChoix );

  //on regroupe dans un array tous les cours de toutes les sessions
  const listeTousLesCours = [coursSession1, coursSession2, coursSession3, coursSession4Tries, coursSession5Tries, coursSession6]

  //définir l'état de base avec tous les cours affichés
  const [tousLesCours, setTousLesCours] = useState(listeTousLesCours);

  //filtrer les cours selon l'option select de l'utilisateur
  function filtrerCours(evenement) {
    //on boucle sur toutes les sessions pour retourner une nouvelle liste des cours triés
    const coursFiltres = listeTousLesCours.map((session) => {
      //on boucle avec la méthode filter pour prendre seulement les cours qui correspondent à notre filtre
      return session.filter((cours) => {
        //on retourne seulement les cours dont les types correspondent à la valeur du select
        return cours.types.some((typeCours) =>
          evenement.target.value !== "" ? typeCours === evenement.target.value : typeCours
        );
      });
    });
    //mettre à jour l'état pour effectuer un nouveau rendu
    setTousLesCours(coursFiltres)
  }

  const [coursAffiche, setCoursAffiche] = useState()

  return (
    <div>
      <h1>La liste des cours</h1>
      <h2>
        J'aime bien
        <select onChange={(evenement)=> filtrerCours(evenement)}>
          <option value="">de tout</option>
          <option value="Jeux">les jeux</option>
          <option value="Web">le web</option>
          <option value="Design">le design</option>
          <option value="Programmation">la programmation</option>
          <option value="Vidéo et Audio">la vidéo</option>
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
              {coursAffiche ? (
                <DetailsCours
                  infoCours={coursAffiche}
                  afficherCours={() => setCoursAffiche(null)}
                />
              ) : (
                session.map((coursFiltre, indexCours) => {
                  return (
                    <NomCours
                      afficherCours={() => setCoursAffiche(coursFiltre)}
                      key={Math.random() * indexCours}
                      infoCours={coursFiltre}
                    />
                  );
                })
              )}
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

  //fonction à appeler pour le tab, puisqu'on utilise un framework react isomorphe (rendu serveur & client)
  resetIdCounter();

  //je prépare ma requete graphQl pour avoir la liste des noms et des slugs de tous les cours
  const requeteGqlTousLesCours = gql`
    {
      coursCollection {
        items {
          sys {
            id
          }
          titre
          description
          session
          auChoix
          choixEntre {
            titre
          }
          types
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

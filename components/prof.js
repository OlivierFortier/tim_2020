//avec le composant markdown, je peux correctement afficher ce que les profs mettent dans le CMS (images, texte en italique, gras, etc)
import Markdown from "markdown-to-jsx";

//un simple composant qui ne contient aucune logique.
//j'affiche simplement ce que j'ai recu en props,


//en l'occurence, unProf
export default function Prof({ unProf }) {

  return (
    <>
      <div>
        {unProf && <h1>{unProf.professeurCollection.items[0].nom}</h1>}
        {unProf && <Markdown>{unProf.professeurCollection.items[0].description}</Markdown>}  
      </div>

      <style jsx>{`
        div {
          background-color: #110c12;
          color: white;
        }
      `}</style>
    </>
  );
}

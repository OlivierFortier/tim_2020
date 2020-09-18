import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ExempleWordPress() {

    //on va chercher nos données de wordpress
  const { data } = useSWR( "http://tim2020.local/wp-json/wp/v2/pages/8", fetcher );

  //si on a aucune données , afficher le loading
  if (!data) return <div style={{ color: "white" }}>Loading...</div>;

  //si on a des données, afficher les données
  return (
    <div style={{ color: "white" }}>
      <h1>chercher les données du cms par AJAX</h1>

      {/* j'affiche mes données icite */}
      <div dangerouslySetInnerHTML={{__html : data.content.rendered}} />

    </div>
  );
}

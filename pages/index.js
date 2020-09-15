import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="conteneur-page">
      <main>
        <h1 className="titre-intro">La juxtaposition du <strong>logique</strong> et du <strong>créatif</strong> +</h1>
      </main>
      <aside>
        <img width="451" height="684" src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
        <button>EXPLOREZ</button>
      </aside>

    {/*il est préférable que vous utlisiez du css "local" et non "global"
      Cela fait que le css n'affecte rien d'autre que cette page, ce composant ou ce fichier, ce qui évite les erreurs.
      Cela se fait facilement à même le fichier js en utilisant la balise style jsx
      comme ci-dessous. */}
      <style jsx>{`
        .conteneur-page {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .titre-intro {
          color : #F18163;
        }

        main {
          height: 70vh;
          border-left: 1px dashed white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        `}</style>
    </div> 
  )
}

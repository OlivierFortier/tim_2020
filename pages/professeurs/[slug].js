import styles from "./pageUnProf.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";
import Head from "next/head";
import {useState, useEffect} from "react";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";

export default function PageUnProfesseur(leProf) {

  
   // gestion des couleurs selont le thème
   const theme = useTheme();
   const listeThemes = useListeThemes();
 
   const [lesStyles, setLesStyles] = useState({
     classeFiltre: styles.unProfArt,
   });
 
   useEffect(() => {
     switch (theme) {
       case listeThemes.art:
         setLesStyles({
           classeFiltre: styles.unProfArt,
         });
         break;
 
       case listeThemes.code:
         setLesStyles({
           classeFiltre: styles.unProfCode,
         });
         break;
 
       case listeThemes.parent:
         setLesStyles({
           classeFiltre: styles.unProf,
         });
         break;
 
       default:
         setLesStyles({
           classeFiltre: styles.unProfArt,
         });
         break;
     }
   }, [theme]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
      transition={{ duration: 0.75 }}
      key="pageUnProf"
    >
      <Head>
        <title>TIM | {leProf.nom}</title>
        <meta
          name="Description"
          content={`Page de ${leProf.nom} professeur des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        ></meta>
        <link
          rel="canonical"
          href={`https://tim-2020.vercel.app/professeurs/${leProf.slug}`}
        ></link>
        <meta property="og:title" content={`${leProf.nom} | TIM Maisonneuve` }/>
        <meta
          property="og:url"
          content={`https://tim-2020.vercel.app/professeurs/${leProf.slug}`}
        />
        <meta
          property="og:description"
          content={`Page de ${leProf.nom} professeur des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        />
      </Head>
      <section>
        <div className={lesStyles.classeFiltre}>
          <Image
            className={styles.imgProf}
            src={leProf?.photo?.url ? leProf.photo.url : "/images/cam.jpg"}
            layout="fill"
            unsized
            quality={1}
            alt={`photo de ${leProf.nom}`}
          />
        </div>
        <article>
          <span className={styles.conteneurTitres}>
            <h1>{leProf.nom}</h1>
            <h5>{leProf.specialisation}</h5>
          </span>

          <div className={styles.contenuTexte}>
            <Markdown className={styles.descriptionProf}>
              {leProf.description}
            </Markdown>
          </div>
        </article>
      </section>
    </motion.main>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Professeurs($slug: String!) {
      professeurCollection(where: { slug: $slug }) {
        items {
          nom
          specialisation
          description
          slug
          photo {
            url
          }
        }
      }
    }
  `;

  const lesVariables = { slug: params.slug };

  const json = await faireRequeteGql(requeteGql, lesVariables);

  const leProf = json.professeurCollection.items[0];

  return { props: leProf, revalidate: 1 };
}

export async function getStaticPaths() {
  const requeteGqlSlug = gql`
    {
      professeurCollection {
        items {
          slug
        }
      }
    }
  `;

  const donnees = await faireRequeteGql(requeteGqlSlug);

  const listeProfs = donnees.professeurCollection.items;

  const slugs = listeProfs.map((prof) => prof.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,

    fallback: false,
  };
}

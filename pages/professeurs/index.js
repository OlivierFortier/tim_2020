import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './professeurs.module.scss';
import { faireRequeteGql } from '../../libs/requetesDonnes';
import { useTheme } from '../../hooks/contexteTheme';

export default function Professeurs({ items }) {
  // gestion du theme de couleur
  const theme = useTheme();
  const [lesStyles, setLesStyles] = useState({
    couleurGenerale: '#f3f1f1',
    couleurHover: '#F16242',
    classeFiltreImg: styles.conteneurImgArt,
  });

  useEffect(() => {
    switch (theme) {
      case 'art':
        setLesStyles({
          couleurGenerale: '#f3f1f1',
          couleurHover: '#F16242',
          classeFiltreImg: styles.conteneurImgArt,
        });
        break;

      case 'code':
        setLesStyles({
          couleurGenerale: '#f3f1f1',
          couleurHover: '#24DC48',
          classeFiltreImg: styles.conteneurImgCode,
        });
        break;

      case 'parent':
        setLesStyles({
          couleurGenerale: '#000000',
          couleurHover: '#4363CA',
          classeFiltreImg: styles.conteneurImg,
        });
        break;

      default:
        setLesStyles({
          couleurGenerale: '#f3f1f1',
          couleurHover: '#F16242',
          classeFiltreImg: styles.conteneurImgArt,
        });
        break;
    }
  }, [theme]);

  // choisir des profs aléatoires à afficher
  const melangerProfs = (liste) =>
    liste
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

  const [profsAlea, setProfAlea] = useState(items);

  useEffect(() => {
    const melanger = melangerProfs(items);
    setProfAlea((ancienOrdre) => melanger);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5, stiffness: 90, ease: 'easeInOut' },
      }}
      exit={{ y: -200, opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.75 }}
      className={styles.conteneur}
      key="professeurs"
    >
      <Head>
        <title>TIM | Professeurs</title>
        <meta
          name="Description"
          content="Page des professeurs des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
        <link rel="canonical" href="https://tim-2020.vercel.app/professeurs" />
        <meta property="og:title" content="Professeurs | TIM Maisonneuve" />
        <meta
          property="og:url"
          content="https://tim-2020.vercel.app/professeurs"
        />
        <meta
          property="og:description"
          content="Page des professeurs des Technique d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.9, delay: 0.2 },
        }}
        className={styles.sectionLesProfs}
      >
        <Link href="professeurs/grille">
          <h1>LES PROFESSEURS</h1>
        </Link>
        <Link href="professeurs/grille">
          <motion.h3
            initial={{ color: lesStyles.couleurGenerale }}
            animate={{ color: lesStyles.couleurGenerale }}
            whileHover={{ color: lesStyles.couleurHover }}
          >
            QUI SONT-ILS?
          </motion.h3>
        </Link>
      </motion.div>
      <div className={styles.sectionImages}>
        <span>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                x: '0%',
                y: '0%',
                scale: 1,
                duration: 0.5,
              }}
              whileHover={{ rotate: 5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[0]?.photo?.url
                    ? profsAlea[0].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[0]?.nom ? profsAlea[0].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '100%', y: '-10%', scale: 1.4 }}
              whileHover={{ rotate: -5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[1]?.photo?.url
                    ? profsAlea[1].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[1]?.nom ? profsAlea[1].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '-10%', y: '140%' }}
              whileHover={{ rotate: 5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[2]?.photo?.url
                    ? profsAlea[2].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[2]?.nom ? profsAlea[2].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
        </span>
        <span>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, scale: 3.6, y: '70%' }}
              whileHover={{ rotate: -5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[3]?.photo?.url
                    ? profsAlea[3].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[3]?.nom ? profsAlea[3].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
        </span>
        <span>
          <motion.div
            style={{ borderColor: lesStyles.couleurGenerale }}
            animate={{ x: '-40%', y: '-20%' }}
            className={styles.cercle}
          />
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '20%', y: '-90%', scale: 0.9 }}
              whileHover={{ rotate: 5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[4]?.photo?.url
                    ? profsAlea[4].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[4]?.nom ? profsAlea[4].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '145%', y: '-140%' }}
              whileHover={{ rotate: -5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[5]?.photo?.url
                    ? profsAlea[5].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[5]?.nom ? profsAlea[5].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              style={{ zIndex: -1 }}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '10%', y: '40%' }}
              whileHover={{ rotate: 5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[6]?.photo?.url
                    ? profsAlea[6].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[6]?.nom ? profsAlea[6].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '-260%', y: '150%', scale: 1.4 }}
              whileHover={{ rotate: -5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[7]?.photo?.url
                    ? profsAlea[7].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[7]?.nom ? profsAlea[7].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={lesStyles.classeFiltreImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: '-300%', y: '340%', scale: 2 }}
              whileHover={{ rotate: 5 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={
                  profsAlea[8]?.photo?.url
                    ? profsAlea[8].photo.url
                    : '/images/cam.jpg'
                }
                alt={profsAlea[8]?.nom ? profsAlea[8].nom : "image d'un prof"}
              />
            </motion.div>
          </Link>
        </span>
      </div>
      <div className={styles.sectionTexte}>
        <Link href="professeurs/grille">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.9, delay: 0.3 },
            }}
            whileTap={{ scale: 1.05 }}
          >
            PLUS<b>++</b>DE <b>25 ANS</b> D'EXPÉRIENCE DANS LE DOMAINE POUR VOUS
            DONNER <b>LA MEILLEURE ÉDUCATION</b>
          </motion.h2>
        </Link>
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Professeurs {
      professeurCollection {
        items {
          nom
          photo {
            url
          }
        }
      }
    }
  `;

  const json = await faireRequeteGql(requeteGql);

  const lesProf = json.professeurCollection;

  return { props: lesProf, revalidate: 1 };
}

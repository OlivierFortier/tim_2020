import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme, useListeThemes } from '../../hooks/contexteTheme';
import styles from './accueil.module.scss';

export default function Accueil() {
  // hook qui permet de savoir si on est en mode tablette
  const tablette = useMediaQuery({ minWidth: 768, maxWidth: 1025 });

  // hook qui nous permet d'aller chercher le thème actuel utilisé
  const theme = useTheme();
  const listeThemes = useListeThemes();

  // configurations et gestion des animations vidéos
  const [videoSource, setVideoSource] = useState('');
  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [videoFutSurvolee, setVideoFutSurvolee] = useState(false);

  useEffect(() => {
    if (!tablette) {
      if (videoIsHovered) setVideoFutSurvolee(true);
    }
    if (tablette) setVideoFutSurvolee(false);
  }, [tablette, videoIsHovered]);

  const setHoverState = (value) => {
    setVideoIsHovered(value);
  };
  const animationVideo = {
    open: {
      scaleX: !tablette ? 2 : 1,
      scaleY: !tablette ? 1.1 : 1,
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
    closed: {
      scaleX: !tablette ? (videoFutSurvolee ? 1.5 : 1) : 1,
      scaleY: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  // définition des styles du thème de base
  const [stylesTheme, setStylesTheme] = useState({
    couleurBordure: '#f3f1f1',
    couleurBouton: '#f3f1f1',
    couleurTexteBouton: '#000000',
    couleurAccent: '#F16242',
  });

  // ajustement des styles selon le thème choisi
  useEffect(() => {
    document.querySelector('#header-site').style.display = 'flex';

    switch (theme) {
      case listeThemes.art:
        setVideoSource('/images/art.webm');
        document.documentElement.style.setProperty(
          '--bgAcceuil',
          'url("/images/art_moment.webp")'
        );
        setStylesTheme({
          couleurBordure: '#f3f1f1',
          couleurBouton: '#f3f1f1',
          couleurTexteBouton: '#000000',
          couleurAccent: '#F16242',
        });
        break;

      case listeThemes.code:
        setVideoSource('/images/code.webm');
        document.documentElement.style.setProperty(
          '--bgAcceuil',
          'url("/images/code_moment.webp")'
        );
        setStylesTheme({
          couleurBordure: '#f3f1f1',
          couleurBouton: '#f3f1f1',
          couleurTexteBouton: '#000000',
          couleurAccent: '#24DC48',
        });
        break;

      case listeThemes.parent:
        setVideoSource('');
        document.documentElement.style.setProperty('--bgAcceuil', '#110c12');
        setStylesTheme({
          couleurBordure: '#000000',
          couleurBouton: '#000000',
          couleurTexteBouton: '#F3F1F1',
          couleurAccent: '#F16242',
        });
        break;

      default:
        setVideoSource('/images/art.webm');
        document.documentElement.style.setProperty(
          '--bgAcceuil',
          'url("/images/art_moment.webp")'
        );
        setStylesTheme({
          couleurBordure: '#f3f1f1',
          couleurBouton: '#f3f1f1',
          couleurTexteBouton: '#000000',
          couleurAccent: '#F16242',
        });
        break;
    }
  }, [videoSource, theme]);

  return (
    <>
      <motion.div
        layout
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.7 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1, ease: 'easeIn' },
        }}
        className={styles.conteneurAccueil}
      >
        <motion.main
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className={styles.accueilMain}
          style={{ borderColor: stylesTheme.couleurBordure }}
        >
          <h1 className={styles.titreIntro}>
            La
            <br /> juxtaposition du <br />
            <strong>logique</strong> et du <br />
            <strong>créatif +</strong>
          </h1>
          <h2 className={styles.nomCollege}>Collège de Maisonneuve</h2>
        </motion.main>
        <aside className={styles.accueilAside}>
          <Link href="/introduction">
            <motion.h2 whileTap={{ scale: 1.5 }} className={styles.continuer}>
              CONTINUER
            </motion.h2>
          </Link>
          <span>
            <motion.div
              initial={{
                x: 0,
                y: 0,
              }}
              animate={{
                x: `${Math.random() * 20}px`,
                y: `${Math.random() * 20}px`,
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  repeatType: 'mirror',
                },
              }}
              style={{ borderColor: stylesTheme.couleurBordure }}
              className={styles.cercleInterractif}
            />
          </span>
          <div
            className={`${styles.conteneurImage} ${
              videoSource == '' ? styles.imageParent : ''
            }`}
          >
            {videoSource && (
              <motion.video
                initial={{
                  x: '10vw',
                  opacity: 0,
                  transition: { ease: 'easeIn', duration: 0.5 },
                }}
                animate={videoIsHovered ? 'open' : 'closed'}
                onHoverStart={(e) => {
                  setHoverState(true);
                }}
                onHoverEnd={(e) => {
                  setHoverState(false);
                }}
                variants={animationVideo}
                key={videoSource}
                loop
                className={styles.imageHero}
                width={451}
                height={684}
                autoPlay
                muted
                playsInline
              >
                <source src={videoSource} type="video/webm" />
              </motion.video>
            )}

            {videoSource == '' && (
              <motion.div
                initial={{
                  x: '10vw',
                  opacity: 0,
                  transition: { ease: 'easeIn', duration: 0.5 },
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: 'easeInOut' },
                }}
              >
                <Image
                  src="/images/parent.jpeg"
                  quality={50}
                  layout="fill"
                  loading="eager"
                  unsized
                  className={styles.imgParent}
                />
              </motion.div>
            )}
          </div>
          <div className={styles.conteneurBouton}>
            <Link href="/introduction">
              <motion.button
                className={styles.boutonExplorer}
                style={{
                  backgroundColor: stylesTheme.couleurBouton,
                  color: stylesTheme.couleurTexteBouton,
                }}
                aria-label="explorer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                EXPLOREZ
              </motion.button>
            </Link>
          </div>
        </aside>
      </motion.div>
    </>
  );
}

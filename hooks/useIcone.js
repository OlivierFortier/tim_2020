import { IoIosGlobe, IoMdCube, IoLogoGameControllerB } from 'react-icons/io';
import { HiCode } from 'react-icons/hi';
import { MdPalette, MdPerson } from 'react-icons/md';
import {
  FaCamera,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaughSquint,
  FaReact,
  FaUnity,
  FaWordpress,
} from 'react-icons/fa';
import { GrIntegration } from 'react-icons/gr';
import {
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremiere,
  SiAdobexd,
  SiCsharp,
  SiMysql,
  SiPhp,
  SiAutodesk,
} from 'react-icons/si';

// hook pour les icones du sujet
export function useIconeSujet(sujet) {
  // on retourne une icone différente selon le sujet du cours
  switch (sujet) {
    case 'Programmation':
      return (props) => <HiCode {...props} />;
      break;

    case 'Design':
      return (props) => <MdPalette {...props} />;
      break;

    case '3D':
      return (props) => <IoMdCube {...props} />;
      break;

    case 'Jeux':
      return (props) => <IoLogoGameControllerB {...props} />;
      break;

    case 'Web':
      return (props) => <IoIosGlobe {...props} />;
      break;

    case 'Vidéo et Audio':
      return (props) => <FaCamera {...props} />;
      break;

    case 'Animation':
      return (props) => <FaLaughSquint {...props} />;
      break;

    case 'Profession':
      return (props) => <MdPerson {...props} />;
      break;

    case 'Intégration':
      return (props) => <GrIntegration {...props} />;
      break;

    default:
      return (props) => <IoIosGlobe {...props} />;
      break;
  }
}

// on retourne une icone différente selon les technologies du cours
export function useIconeTechnos(technologies) {
  return technologies.map((techno) => {
    switch (techno) {
      case 'HTML':
        return (props) => <FaHtml5 {...props} />;
        break;

      case 'CSS':
        return (props) => <FaCss3Alt {...props} />;
        break;

      case 'JavaScript':
        return (props) => <FaJs {...props} />;
        break;

      case 'React':
        return (props) => <FaReact {...props} />;
        break;

      case 'PHP':
        return (props) => <SiPhp {...props} />;
        break;

      case 'SQL':
        return (props) => <SiMysql {...props} />;
        break;

      case 'Wordpress':
        return (props) => <FaWordpress {...props} />;
        break;

      case 'C#':
        return (props) => <SiCsharp {...props} />;
        break;

      case 'Unity':
        return (props) => <FaUnity {...props} />;
        break;

      case 'Git':
        return (props) => <FaGitAlt {...props} />;
        break;

      case 'Photoshop':
        return (props) => <SiAdobephotoshop {...props} />;
        break;

      case 'Illustrator':
        return (props) => <SiAdobeillustrator {...props} />;
        break;

      case 'XD':
        return (props) => <SiAdobexd {...props} />;
        break;

      case 'Premiere Pro':
        return (props) => <SiAdobepremiere {...props} />;
        break;

      case 'After Effects':
        return (props) => <SiAdobeaftereffects {...props} />;
        break;

      case 'Animate':
        return (props) => <FaLaughSquint {...props} />;
        break;

      case 'Audition':
        return (props) => <SiAdobeaudition {...props} />;
        break;

      case 'Logic Pro':
        return (props) => <FaLaughSquint {...props} />;
        break;

      case 'Maya':
        return (props) => <SiAutodesk {...props} />;
        break;

      default:
        return (props) => <FaLaughSquint {...props} />;
        break;
    }
  });
}

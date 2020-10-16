import { IoIosGlobe, IoMdCube, IoLogoGameControllerB } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { MdPalette, MdPerson } from "react-icons/md";
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
} from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
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
} from "react-icons/si";

//hook pour les icones du sujet
export function useIconeSujet(sujet) {
  //on retourne une icone différente selon le sujet du cours
  switch (sujet) {
    case "Programmation":
      return (props) => <HiCode {...props}></HiCode>;
      break;

    case "Design":
      return (props) => <MdPalette {...props}></MdPalette>;
      break;

    case "3D":
      return (props) => <IoMdCube {...props}></IoMdCube>;
      break;

    case "Jeux":
      return (props) => (
        <IoLogoGameControllerB {...props}></IoLogoGameControllerB>
      );
      break;

    case "Web":
      return (props) => <IoIosGlobe {...props}></IoIosGlobe>;
      break;

    case "Vidéo et Audio":
      return (props) => <FaCamera {...props}></FaCamera>;
      break;

    case "Animation":
      return (props) => <FaLaughSquint {...props}></FaLaughSquint>;
      break;

    case "Profession":
      return (props) => <MdPerson {...props}></MdPerson>;
      break;

    case "Intégration":
      return (props) => <GrIntegration {...props}></GrIntegration>;
      break;

    default:
      return (props) => <IoIosGlobe {...props}></IoIosGlobe>;
      break;
  }
}

export function useIconeTechnos(technologies) {
  return technologies.map((techno) => {
    switch (techno) {
      case "HTML":
        return (props) => <FaHtml5 {...props}></FaHtml5>;
        break;

      case "CSS":
        return (props) => <FaCss3Alt {...props}></FaCss3Alt>;
        break;

      case "JavaScript":
        return (props) => <FaJs {...props}></FaJs>;
        break;

      case "React":
        return (props) => <FaReact {...props}></FaReact>;
        break;

      case "PHP":
        return (props) => <SiPhp {...props}></SiPhp>;
        break;

      case "SQL":
        return (props) => <SiMysql {...props}></SiMysql>;
        break;

      case "Wordpress":
        return (props) => <FaWordpress {...props}></FaWordpress>;
        break;

      case "C#":
        return (props) => <SiCsharp {...props}></SiCsharp>;
        break;

      case "Unity":
        return (props) => <FaUnity {...props}></FaUnity>;
        break;

      case "Git":
        return (props) => <FaGitAlt {...props}></FaGitAlt>;
        break;

      case "Photoshop":
        return (props) => <SiAdobephotoshop {...props}></SiAdobephotoshop>;
        break;

      case "Illustrator":
        return (props) => <SiAdobeillustrator {...props}></SiAdobeillustrator>;
        break;

      case "XD":
        return (props) => <SiAdobexd {...props}></SiAdobexd>;
        break;

      case "Premiere Pro":
        return (props) => <SiAdobepremiere {...props}></SiAdobepremiere>;
        break;

      case "After Effects":
        return (props) => (
          <SiAdobeaftereffects {...props}></SiAdobeaftereffects>
        );
        break;

      case "Animate":
        return (props) => <FaLaughSquint {...props}></FaLaughSquint>;
        break;

      case "Audition":
        return (props) => <SiAdobeaudition {...props}></SiAdobeaudition>;
        break;

      case "Logic Pro":
        return (props) => <FaLaughSquint {...props}></FaLaughSquint>;
        break;

      case "Maya":
        return (props) => <FaLaughSquint {...props}></FaLaughSquint>;
        break;

      default:
        return (props) => <FaLaughSquint {...props}></FaLaughSquint>;
        break;
    }
  });
}

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
  FaWordpress
} from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import {
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCsharp,
  SiMysql,
  SiPhp,
  SiAutodesk
} from "react-icons/si";

// hook pour les icones du sujet
export function GetIconeSujet(sujet) {
  // on retourne une icone différente selon le sujet du cours
  switch (sujet) {
    case "Programmation":
      return S_HiCode;

    case "Design":
      return S_MdPalette;

    case "3D":
      return S_IoMdCube;

    case "Jeux":
      return S_IoLogoGameControllerB;

    case "Web":
      return S_FaHtml5;

    case "Vidéo et Audio":
      return S_FaCamera;

    case "Animation":
      return S_FaLaughSquint;

    case "Profession":
      return S_MdPerson;

    case "Intégration":
      return S_GrIntegration;

    default:
      return S_IoIosGlobe;
  }
}

// on retourne une icone différente selon les technologies du cours
export function GetIconeTechnos(technologies) {
  return technologies.map((techno) => {
    switch (techno) {
      case "HTML":
        return S_FaHtml5;

      case "CSS":
        return S_FaCss3Alt;

      case "JavaScript":
        return S_FaJs;

      case "React":
        return S_FaReact;

      case "PHP":
        return S_SiPhp;

      case "SQL":
        return S_SiMysql;

      case "Wordpress":
        return S_FaWordpress;

      case "C#":
        return S_SiCsharp;

      case "Unity":
        return S_FaUnity;

      case "Git":
        return S_FaGitAlt;

      case "Photoshop":
        return S_SiAdobephotoshop;

      case "Illustrator":
        return S_SiAdobeillustrator;

      case "XD":
        return S_SiAdobexd;

      case "Premiere Pro":
        return S_SiAdobepremierepro;

      case "After Effects":
        return S_SiAdobeaftereffects;

      case "Animate":
        return S_FaLaughSquint;

      case "Audition":
        return S_SiAdobeaudition;

      case "Logic Pro":
        return S_FaLaughSquint;

      case "Maya":
        return S_SiAutodesk;

      default:
        return S_FaLaughSquint;
    }
  });
}

const S_HiCode = (props) => <HiCode {...props} />;
const S_MdPalette = (props) => <MdPalette {...props} />;
const S_IoMdCube = (props) => <IoMdCube {...props} />;
const S_MdPerson = (props) => <MdPerson {...props} />;
const S_IoLogoGameControllerB = (props) => <IoLogoGameControllerB {...props} />;
const S_IoIosGlobe = (props) => <IoIosGlobe {...props} />;
const S_FaCamera = (props) => <FaCamera {...props} />;
const S_FaCss3Alt = (props) => <FaCss3Alt {...props} />;
const S_FaGitAlt = (props) => <FaGitAlt {...props} />;
const S_FaHtml5 = (props) => <FaHtml5 {...props} />;
const S_FaJs = (props) => <FaJs {...props} />;
const S_FaLaughSquint = (props) => <FaLaughSquint {...props} />;
const S_FaReact = (props) => <FaReact {...props} />;
const S_FaUnity = (props) => <FaUnity {...props} />;
const S_FaWordpress = (props) => <FaWordpress {...props} />;
const S_GrIntegration = (props) => <GrIntegration {...props} />;
const S_SiAdobeaftereffects = (props) => <SiAdobeaftereffects {...props} />;
const S_SiAdobeaudition = (props) => <SiAdobeaudition {...props} />;
const S_SiAdobeillustrator = (props) => <SiAdobeillustrator {...props} />;
const S_SiAdobephotoshop = (props) => <SiAdobephotoshop {...props} />;
const S_SiAdobepremierepro = (props) => <SiAdobepremierepro {...props} />;
const S_SiAdobexd = (props) => <SiAdobexd {...props} />;
const S_SiCsharp = (props) => <SiCsharp {...props} />;
const S_SiMysql = (props) => <SiMysql {...props} />;
const S_SiPhp = (props) => <SiPhp {...props} />;
const S_SiAutodesk = (props) => <SiAutodesk {...props} />;

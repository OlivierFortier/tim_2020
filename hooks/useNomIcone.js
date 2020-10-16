import { IoIosGlobe, IoMdCube, IoLogoGameControllerB } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import {MdPalette, MdPerson} from "react-icons/md"
import {FaCamera, FaLaughSquint} from "react-icons/fa"
import {GrIntegration} from "react-icons/gr"

export function useIcone(sujet) {
  
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
        return (props) => <IoLogoGameControllerB {...props}></IoLogoGameControllerB>;
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

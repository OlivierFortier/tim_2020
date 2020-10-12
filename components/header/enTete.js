import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";
import { useRouter } from "next/router";

export default function EnTete() {
  const router = useRouter();

  return (
    <>
      <header>
        {router.pathname === "/" && (
          <span>
            <BoutonSelectionTheme />
            <div id="titre">Techniques d'intégration multimédia</div>
          </span>
        )}
        <Menu />
      </header>

      <style jsx>{`
        /** exemple d'importation des variables sass pour les utiliser */
        @import "styles/variables";

        header {
          display: flex;
          flex-direction: row;
          justify-content: ${router.pathname === "/"
            ? "space-between"
            : "flex-end"};
          align-items: center;
          height: auto;
          padding: 2rem 2rem 1rem;
          margin-bottom: 3rem;
          max-width: 1370px;
        }

        span {
          display: flex;
          z-index: 7;
        }

        div {
          color: #ffffff;
        }
        #titre {
          margin-right: auto;
          font-size: 24px;
          line-height: 29px;
          text-transform: uppercase;
          font-style: normal;
          font-weight: normal;
        }
      `}</style>
    </>
  );
}

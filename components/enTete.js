import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";

export default function EnTete() {
  return (
    <>
      <header>
        <BoutonSelectionTheme />
        <div id="titre">
          <div>Techniques d'intégration multimédia</div>
        </div>
        <Menu />
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        div {
          color: #ffffff;
        }
        #titre {
          margin-right: auto;
          font-size: 23px;
        }
      `}</style>
    </>
  );
}

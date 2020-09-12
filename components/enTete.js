import Menu from "./menu";
import SelecteurTheme from "./selecteurTheme";

export default function EnTete() {
  return (
    <>
      <header>
        <SelecteurTheme />
        <div id="titre">
          <div id="titreProgramme">Techniques d'intégration multimédia</div>
          <div id="nomCollege">Collège de Maisonneuve</div>
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
        }
        #titreProgramme {
          font-size: 23px;
        }
        #nomCollege {
          font-size: 18px;
          margin-left: 155px;
        }
      `}</style>
    </>
  );
}

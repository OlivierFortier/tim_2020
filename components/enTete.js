import Menu from "./menu";
import SelecteurTheme from "./selecteurTheme";

export default function EnTete() {
  return (
    <>
      <header>
        <div>
            <SelecteurTheme />
            Techniques d'intégration multimédia
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
            color : #FFFFFF;
        }
    `}</style>
    </>
  );
}

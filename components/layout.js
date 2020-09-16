import EnTete from "./enTete";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <EnTete></EnTete>
        <div id="conteneur-application">
          {children}
        </div>
      </div>

      <style jsx>{`
        div {
          background-color: #110c12;
          height: 100vh;
        }

        #conteneur-application {
          display: flex;
          justify-content: center;
          height: auto;
        }

      `}</style>
    </>
  );
}

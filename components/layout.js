import EnTete from "./enTete";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <EnTete></EnTete>
        {children}
      </div>

    <style jsx>{`
        div {
            background-color: #110C12;
            height: 100vh;
        }    
    `}</style>

    </>
  );
}

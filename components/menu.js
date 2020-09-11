import { useState } from "react";

export default function Menu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setMenuOuvert(!menuOuvert)}>menu</button>
        {menuOuvert && (
          <nav>
            <ul>
              <li>accueil</li>
              <li>cours</li>
              <li>profs</li>
              <li>vie étudiante</li>
            </ul>
          </nav>
        )}
      </div>

      <style jsx>{`
            nav {
                display: flex;
                flex-direction: column;
                position: absolute;
                right: 1vw;
                color: white;
            }
    `}</style>
    </>
  );
}

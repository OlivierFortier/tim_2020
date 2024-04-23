export function useOrdreListeCours(listeCours) {
  // on extrait la liste des cours et on la sépare par session
  const coursSession1 = listeCours.filter((cours) => cours.session === 1);
  const coursSession2 = listeCours.filter((cours) => cours.session === 2);
  const coursSession3 = listeCours.filter((cours) => cours.session === 3);
  const coursSession6 = listeCours.filter((cours) => cours.session === 6);

  // on trie les session qui ont des choix de cours
  const coursSession4 = listeCours.filter((cours) => cours.session === 4);
  const coursSession4Tries = [...coursSession4].sort(
    (a, b) => a.auChoix - b.auChoix
  );
  const coursSession5 = listeCours.filter((cours) => cours.session === 5);
  const coursSession5Tries = [...coursSession5].sort(
    (a, b) => a.auChoix - b.auChoix
  );

  // on retourne la liste bien ordonnée des cours
  return [
    coursSession1,
    coursSession2,
    coursSession3,
    coursSession4Tries,
    coursSession5Tries,
    coursSession6
  ];
}

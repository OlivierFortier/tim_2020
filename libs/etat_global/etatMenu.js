import { proxy } from "valtio";

// store global qui fonctionne par proxy et observables, permet d'accéder à l'état du menu depuis n'importe quel composant ou fichier
// sans causer un re-render inutile de touts les enfants du layout (tel Redux ou un Contexte)
export const etatMenu = proxy({ menuEstOuvert: false });

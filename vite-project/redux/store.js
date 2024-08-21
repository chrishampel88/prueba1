// install redux  react-redux  redux-thunk

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer"; // Importa tu reductor raíz
import { thunk } from "redux-thunk";

// Habilita Redux DevTools si está disponible en el navegador, de lo contrario, usa compose de Redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crea la tienda de Redux, aplicando el middleware thunk y habilitando Redux DevTools
const store = createStore(
  rootReducer, // Pasa el reductor raíz
  composeEnhancer(applyMiddleware(thunk)) // Aplica thunk middleware y enhancers
);

// Exporta la tienda para que pueda ser utilizada en tu aplicación
export default store;

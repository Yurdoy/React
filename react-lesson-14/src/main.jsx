import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  // Оборачиваем App в Provider и передача в него store
  <Provider store={store}>
    <App />
  </Provider>
);

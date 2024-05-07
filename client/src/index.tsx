import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import "@fontsource/poppins";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/Routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

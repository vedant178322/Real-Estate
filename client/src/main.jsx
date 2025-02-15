import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0sr1ropx4tissih2.us.auth0.com"
     clientId="NA3WrlnSTj4KSqA7HryaNTiVS97WJ8cj"
     authorizationParams={{
      redirect_uri: "https://real-estate-front-ten.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

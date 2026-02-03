import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";
import { getAuth0Config } from "./auth0";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root element");

const { domain, clientId, audience } = getAuth0Config();
const app = (
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        ...(audience ? { audience } : {}),
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);

createRoot(rootEl).render(app);

import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) return <div className="app">Loading…</div>;

  return (
    <div className="app">
      <h1>Macaulay Multimedia</h1>

      {!isAuthenticated ? (
        <button className="button" onClick={() => loginWithRedirect()}>
          Log in
        </button>
      ) : (
        <div className="card">
          <div className="row">
            <div>
              <div className="label">Signed in as</div>
              <div className="value">{user?.name ?? user?.email ?? "User"}</div>
            </div>
            <button
              className="button"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

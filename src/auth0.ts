type Auth0AppConfig = {
  domain: string;
  clientId: string;
  audience?: string;
};

function requiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Set it in Netlify or in a local .env file (see .env.example).`,
    );
  }
  return value;
}

export function getAuth0Config(): Auth0AppConfig {
  return {
    domain: requiredEnv("VITE_AUTH0_DOMAIN"),
    clientId: requiredEnv("VITE_AUTH0_CLIENT_ID"),
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  };
}


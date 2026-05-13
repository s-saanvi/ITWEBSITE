export const getBaseUrl = (env = import.meta.env) => {
  return env.BASE_URL === '/' ? '' : env.BASE_URL;
};

export const withBase = (path: string, env = import.meta.env) => {
  if (!path.startsWith('/')) return path;
  return `${getBaseUrl(env)}${path}`;
};

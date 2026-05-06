export const getBaseUrl = () => {
  return import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
};

export const withBase = (path: string) => {
  if (!path.startsWith('/')) return path;
  return `${getBaseUrl()}${path}`;
};

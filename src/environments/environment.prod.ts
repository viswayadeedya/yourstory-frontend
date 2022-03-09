export const environment = {
  apiUrl: (serviceUrl, id = null) => `api${serviceUrl}${id ? `/${id}` : ''}`,
  production: true,
};

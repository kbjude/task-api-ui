const resolveBaseUrl = () => {
  const testUrl = 'http://localhost:3000';
  const env = process.env.NODE_ENV;
  const baseUrl = ['test', 'development'].includes(env)
    ? testUrl
    : process.env.REACT_APP_API_URL;
  console.log(baseUrl);
  return testUrl;
};

export default resolveBaseUrl;

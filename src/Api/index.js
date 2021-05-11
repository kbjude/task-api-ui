const resolveBaseUrl = () => {
    //eslint-disable-line
  // const testUrl = "https://api.tukole.ug";
  const testUrl = 'https://tukole-api-test.innovationvillage.co.ug';
  const env = process.env.NODE_ENV;
  const baseUrl = ['test', 'development'].includes(env)
    ? testUrl
    : process.env.REACT_APP_API_URL;
  console.log(baseUrl);
  return testUrl;
};

export default resolveBaseUrl;

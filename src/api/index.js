const api = () => {
  const baseUrl = "https://servicepad-post-api.herokuapp.com/articles/";

  const get = async () => {
    return await fetch(baseUrl);
  };

  return { get };
};

const Api = api();

export default Api;

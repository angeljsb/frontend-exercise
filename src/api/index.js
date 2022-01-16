const api = () => {
  const baseUrl = "https://servicepad-post-api.herokuapp.com/articles/";

  const get = async () => {
    const res = await fetch(baseUrl);
    return await res.json();
  };

  return { get };
};

const Api = api();

export default Api;

const api = () => {
  const baseUrl = "https://servicepad-post-api.herokuapp.com/articles/";

  const get = async () => {
    return await fetch(baseUrl);
  };

  const post = async (data) => {
    return await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return { get, post };
};

const Api = api();

export default Api;

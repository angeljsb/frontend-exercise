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

  const put = async (data) => {
    const url = baseUrl + data.id;
    return await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        author: data.author,
        title: data.title,
        content: data.content,
      }),
    });
  };

  return { get, post, put };
};

const Api = api();

export default Api;

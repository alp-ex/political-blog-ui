// const apiURL = process.env.SAPPER_APP_API_URL;
const apiURL = "";

export async function getData(endpoint: string) {
  const config = {
    method: "GET",
  };

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

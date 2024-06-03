import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
export const getImage = async (topic, currentPage) => {
  const clientId = "gshd8qq4bV4zd1TIVNE2MYNpOiXFMQcQx7I3hFORmHA";
  const response = await axios.get("/search/photos", {
    params: {
      client_id: clientId,
      query: topic,
      page: currentPage,
      per_page: 10,
    },
  });
  return response.data.results;
};

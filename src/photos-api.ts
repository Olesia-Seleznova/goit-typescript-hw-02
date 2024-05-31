import axios from "axios";

const API_KEY = "tRsVS1GWcbzQWiFrTd0IrAnjJx0-dCh59uIXJNd0_Uo";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (serchQuery: string, currentPage: number) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: serchQuery,
      page: currentPage,
      per_page: 12,
      client_id: API_KEY,
      orientation: "landscape",
    },
  });

  return response.data;
};

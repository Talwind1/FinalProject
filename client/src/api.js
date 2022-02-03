import axios from "axios";

const dressesApi = axios.create({
  baseURL: "https://61c311049cfb8f0017a3e937.mockapi.io",
});

export default dressesApi;

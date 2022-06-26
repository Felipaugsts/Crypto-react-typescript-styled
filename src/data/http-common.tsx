import axios from "axios";
export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: {
    "Content-type": "application/json",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
  },
});

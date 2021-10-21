import axios from "axios";

export default axios.create({
  baseURL: process.env.AZURACAST_URL,
  headers: {
    "X-API-Key": process.env.AZURACAST_API,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://radio.harryjms.uk",
  headers: {
    "X-API-Key": process.env.AZURACAST_API,
  },
});

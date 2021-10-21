import { NextApiRequest, NextApiResponse } from "next";
import axios from "../../../utils/axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const shortcode = req.query["shortcode"];
  try {
    const { data } = await axios.get<Radio.Station[]>("/api/nowplaying");
    const result = data.find((radio) => radio.station.shortcode === shortcode);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

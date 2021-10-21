import { NextApiRequest, NextApiResponse } from "next";
import axios from "../../utils/axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get("/api/nowplaying");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
};

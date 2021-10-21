import { NextApiRequest, NextApiResponse } from "next";
import iTunes from "../../utils/iTunes";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artist, title } = req.query;

  try {
    //@ts-ignore
    const info = await new iTunes().lookupTrack(artist, title);
    res.json(info);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

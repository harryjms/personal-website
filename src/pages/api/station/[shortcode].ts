import { NextApiRequest, NextApiResponse } from "next";
import axios from "../../../utils/axios";
import iTunes from "../../../utils/iTunes";

const enrichFromITunes = async (station: Radio.Station) => {
  if (station) {
    const { artist, title } = station.now_playing.song;
    const lookup = await new iTunes().lookupTrack(artist, title);
    if (lookup.results.length > 0) {
      station.now_playing.song.art = lookup.results[0].artworkUrl100.replace(
        "100x100",
        "500x500"
      );
      station.now_playing.song.album = lookup.results[0].collectionName;
      station.now_playing.song.albumURL = lookup.results[0].collectionViewURL;
    }
    return station;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const shortcode = req.query["shortcode"];
  try {
    const { data } = await axios.get<Radio.Station[]>("/api/nowplaying");
    const result = data.find((radio) => radio.station.shortcode === shortcode);
    res.json(await enrichFromITunes(result));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

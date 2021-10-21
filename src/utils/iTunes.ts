import Axios from "axios";
import { ITunesResponse } from "../@types/iTunesResponse";

class iTunes {
  private axios = Axios.create({
    baseURL: "https://itunes.apple.com/search",
  });

  async lookupTrack(artist: string, title: string) {
    const { data } = await this.axios.get<ITunesResponse>(
      `?term=${artist} - ${title}`
    );
    return data;
  }
}
export default iTunes;

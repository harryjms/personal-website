export interface ITunesResponse {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: string;
  kind: string;
  artistID: number;
  collectionID?: number;
  trackID: number;
  artistName: string;
  collectionName?: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName: string;
  artistViewURL: string;
  collectionViewURL?: string;
  trackViewURL: string;
  previewURL: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable?: boolean;
  collectionPrice?: number;
}

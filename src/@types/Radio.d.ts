declare module Radio {
  export interface Listeners {
    total: number;
    unique: number;
    current: number;
  }

  export interface Mount {
    path: string;
    is_default: boolean;
    id: number;
    name: string;
    url: string;
    bitrate: number;
    format: string;
    listeners: Listeners;
  }

  export interface Station {
    id: number;
    name: string;
    shortcode: string;
    description: string;
    frontend: string;
    backend: string;
    listen_url: string;
    url: string;
    public_player_url: string;
    playlist_pls_url: string;
    playlist_m3u_url: string;
    is_public: boolean;
    mounts: Mount[];
    remotes: any[];
  }

  export interface Listeners2 {
    total: number;
    unique: number;
    current: number;
  }

  export interface Live {
    is_live: boolean;
    streamer_name: string;
    broadcast_start: number;
  }

  export interface Song {
    id: string;
    text: string;
    artist: string;
    title: string;
    album: string;
    albumURL?: string;
    genre: string;
    lyrics: string;
    art: string;
    custom_fields: any[];
  }

  export interface NowPlaying {
    elapsed: number;
    remaining: number;
    sh_id: number;
    played_at: number;
    duration: number;
    playlist: string;
    streamer: string;
    is_request: boolean;
    song: Song;
  }

  export interface Song2 {
    id: string;
    text: string;
    artist: string;
    title: string;
    album: string;
    genre: string;
    lyrics: string;
    art: string;
    custom_fields: any[];
  }

  export interface SongHistory {
    sh_id: number;
    played_at: number;
    duration: number;
    playlist: string;
    streamer: string;
    is_request: boolean;
    song: Song2;
  }

  export interface Station {
    station: Station;
    listeners: Listeners2;
    live: Live;
    now_playing: NowPlaying;
    playing_next?: any;
    song_history: SongHistory[];
    is_online: boolean;
    cache: string;
  }
}

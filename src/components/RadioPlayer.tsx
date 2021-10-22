import {
  faExclamationTriangle,
  faPlay,
  faSpinner,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosError } from "axios";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "./Button";

interface IRadioPlayerProps {
  shortcode: string;
}

type AudioEventMapKey = keyof HTMLMediaElementEventMap;
type AudioEventMapValue = () => void;

const RadioPlayer: React.FC<IRadioPlayerProps> = ({ shortcode }) => {
  const [stationInfo, setStationInfo] = useState<Radio.Station | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [playing, setPlaying] = useState(false);
  const refPlayer = useRef<HTMLAudioElement>(null);
  const firstLoad = useRef(true);

  const getInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get<Radio.Station>(
        "/api/station/radio_east"
      );
      setStationInfo(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    firstLoad.current = false;

    const interval = setInterval(() => {
      getInfo();
    }, 1000 * 15);

    getInfo();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentSong = useMemo(() => {
    return stationInfo?.now_playing.song;
  }, [stationInfo?.now_playing]);

  useEffect(() => {
    if (currentSong && "mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.artist,
        album: currentSong.album || stationInfo.station.name,
        artwork: [
          {
            src: currentSong.art,
            sizes: "500x500",
            type: "image/jpg",
          },
        ],
      });
    }
  }, [currentSong]);

  useEffect(() => {
    const player = refPlayer.current;
    if (player) {
      let events = new Map<AudioEventMapKey, AudioEventMapValue>([
        [
          "play",
          () => {
            if ("mediaSession" in navigator) {
              navigator.mediaSession.playbackState = "playing";
            }
            setPlaying(true);
          },
        ],
        [
          "pause",
          () => {
            if ("mediaSession" in navigator) {
              navigator.mediaSession.playbackState = "paused";
            }
            setPlaying(false);
          },
        ],
      ]);

      events.forEach((fn, event) => {
        player.addEventListener(event, fn);
      });

      return () => {
        events.forEach((fn, event) => {
          player.removeEventListener(event, fn);
        });
      };
    }
  }, [refPlayer.current]);

  const streamUrl = useMemo(() => {
    return stationInfo?.station?.mounts[0]?.url;
  }, [stationInfo?.station.mounts]);

  const handleStop = () => {
    refPlayer.current?.pause();
  };

  const handlePlay = () => {
    refPlayer.current?.load();
    refPlayer.current?.play();
  };

  const BtnControl: React.FC<{ control: "play" | "stop" }> = useCallback(
    ({ control }) => {
      return (
        <Button
          type="button"
          className="rounded-full h-[32px] w-[32px] text-center bg-blue-500"
          onClick={control === "play" ? handlePlay : handleStop}
        >
          <FontAwesomeIcon icon={control === "play" ? faPlay : faStop} />
        </Button>
      );
    },
    []
  );

  if (loading && firstLoad.current)
    return (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
        Loading Radio...
      </div>
    );

  if (!loading && error)
    return (
      <div className="font-bold text-red-500 mt-4">
        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
        There was an error when loading the radio. It could be that the server
        is unreachable.
      </div>
    );

  if (!loading && !stationInfo?.live.is_live)
    return (
      <div className=" font-bold text-red-500 mt-4">
        The radio is currently off air.
      </div>
    );

  if (stationInfo)
    return (
      <div className="w-full flex flex-col items-center sm:items-start sm:flex-row sm:w-1/2">
        <div className="w-3/4 sm:w-[100px] mr-2">
          <img src={currentSong?.art} className="rounded-lg" />
        </div>
        <div className="flex w-full flex-col justify-center text-center sm:w-1/2 sm:text-left">
          <div className="uppercase font-bold text-xs text-blue-500 mt-4 sm:mt-0">
            Now playing
          </div>
          <div className="text-lg font-bold">{currentSong?.artist}</div>
          <div className="flex gap-2 flex-col items-center sm:justify-center sm:items-start sm:gap-0">
            <div>{currentSong?.title}</div>
            {currentSong?.album && (
              <div className="text-xs font-light text-gray-500">
                {currentSong.albumURL ? (
                  <a href={currentSong.albumURL} target="_blank">
                    {currentSong.album}
                  </a>
                ) : (
                  currentSong.album
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 ml-4 sm:mt-0 sm:self-center items-end">
          {playing ? (
            <BtnControl control="stop" key="btn-stop" />
          ) : (
            <BtnControl control="play" key="btn-play" />
          )}
        </div>

        <audio
          title={`${currentSong?.artist} - ${currentSong?.title}`}
          src={streamUrl}
          ref={refPlayer}
        />
      </div>
    );
  return null;
};

export default RadioPlayer;

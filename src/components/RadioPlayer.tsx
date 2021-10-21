import axios, { AxiosError } from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
    getInfo();
  }, []);

  useEffect(() => {
    const player = refPlayer.current;
    if (player) {
      let events = new Map<AudioEventMapKey, AudioEventMapValue>([
        [
          "play",
          () => {
            setPlaying(true);
          },
        ],
        [
          "pause",
          () => {
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

  const currentSong = useMemo(() => {
    return stationInfo?.now_playing.song;
  }, [stationInfo?.now_playing]);

  const handleStop = () => {
    refPlayer.current?.pause();
  };

  const handlePlay = () => {
    refPlayer.current?.play();
  };

  return (
    <div className="w-1/2">
      <div className="flex">
        <div className="w-[100px] rounded-t-lg overflow-hidden mr-2">
          <img src={currentSong?.art} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="uppercase font-bold text-xs text-blue-500">
            Now playing
          </div>
          <div className="text-lg font-bold">{currentSong?.artist}</div>
          <div>{currentSong?.title}</div>
        </div>
      </div>
      <div>
        {playing ? (
          <Button
            type="button"
            className="media-control stop"
            onClick={handleStop}
          >
            Stop
          </Button>
        ) : (
          <Button
            type="button"
            className="media-control play"
            onClick={handlePlay}
          >
            Play
          </Button>
        )}
      </div>
      <audio src={streamUrl} ref={refPlayer} />
    </div>
  );
};

export default RadioPlayer;

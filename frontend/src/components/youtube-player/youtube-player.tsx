import React, { useRef, useEffect } from "react";
import Plyr, { APITypes, PlyrOptions, PlyrSource } from "plyr-react";
import "plyr-react/plyr.css";
import Video from "../../assets/trump.mp4";
import captions from "../../assets/captions.vtt";
import "./youtube-player.css";
import { VideoPlayerProps } from "../../types";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ markers, jumpTo }) => {
  const plyrRef = useRef<APITypes>(null);

  useEffect(() => {
    if (jumpTo !== undefined && plyrRef.current) {
      plyrRef.current.plyr.currentTime = jumpTo;
    }
  }, [jumpTo]);

  const videoSource: PlyrSource = {
    type: "video" as const,
    sources: [
      {
        src: Video,
        type: "video/mp4",
      },
    ],
    tracks: [
      {
        kind: "subtitles",
        label: "English",
        srcLang: "en",
        src: captions,
        default: true,
      },
    ],
  };

  const options: PlyrOptions = {
    controls: ["play", "progress", "volume", "fullscreen", "settings"],
    captions: { active: true, language: "en" },
    markers: {
      enabled: true,
      points: markers,
    },
    displayDuration: true,
    tooltips: {
      controls: true,
      seek: true,
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Plyr ref={plyrRef} source={videoSource} options={options} />
    </div>
  );
};

export default VideoPlayer;

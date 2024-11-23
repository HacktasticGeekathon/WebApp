import React from "react";
import Plyr, { PlyrOptions, PlyrSource } from "plyr-react";
import "plyr-react/plyr.css";
import Video from "../../assets/trump.mp4";
import captions from "../../assets/captions.vtt";
import "./youtube-player.css";
import { VideoPlayerProps } from "../../types";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ markers, playerRef }) => {
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
      <Plyr ref={playerRef} source={videoSource} options={options} />
    </div>
  );
};

export default VideoPlayer;

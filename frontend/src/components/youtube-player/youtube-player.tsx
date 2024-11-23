import React, { useRef } from "react";
import Plyr, { APITypes, PlyrOptions, PlyrSource } from "plyr-react";
import "plyr-react/plyr.css";
import Video from "../../assets/trump.mp4";
import captions from "../../assets/captions.vtt";

const VideoPlayer: React.FC = () => {
  const plyrRef = useRef<APITypes>(null);

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
      points: [
        {
          time: 5,
          label: "Test marker",
        },
        {
          time: 15,
          label: "One minute",
        },
      ],
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Plyr ref={plyrRef} source={videoSource} options={options} />
    </div>
  );
};

export default VideoPlayer;

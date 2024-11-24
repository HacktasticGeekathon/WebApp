import { APITypes } from "plyr-react";

interface BaseTopic {
  title: string;
  description: string;
  timestamp: number[];
  verdict?: string;
}

export interface Fallacy extends BaseTopic {
  type: "fallacy";
}

export interface FactCheck extends BaseTopic {
  type: "factCheck";
}

export type Topic = Fallacy | FactCheck;

export interface TopicCardProps {
  topic: Topic;
  onClick?: () => void;
}

export type Marker = {
  label: string;
  time: number;
};

export interface VideoPlayerProps {
  videoData: VideoData;
  markers: Marker[];
  playerRef: React.RefObject<APITypes>;
  vtt?: string;
}

export type VideoData = {
  video: string;
  thumbnail: string;
};

export type Caption = FactCheck | Fallacy;

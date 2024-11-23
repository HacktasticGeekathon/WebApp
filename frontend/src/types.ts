import { APITypes } from "plyr-react";

interface BaseTopic {
  title: string;
  description: string;
  timestamp: number;
}

export interface Fallacy extends BaseTopic {
  type: "fallacy";
}

export interface FactCheck extends BaseTopic {
  type: "factCheck";
  verdict: string;
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
  markers: Marker[];
  playerRef: React.RefObject<APITypes>;
}

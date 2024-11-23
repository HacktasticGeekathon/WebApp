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
  verdict: "True" | "False" | "Partially True" | "Misleading";
}

export type Topic = Fallacy | FactCheck;

export interface TopicCardProps {
  topic: Topic;
  onClick?: () => void;
}

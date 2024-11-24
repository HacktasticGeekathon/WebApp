import React from "react";
import { TopicCardProps } from "../../types";

const TopicCard: React.FC<TopicCardProps> = ({ topic, onClick }) => {
  const formatTimestamp = (timestamp: number) => {
    return `${Math.floor(timestamp / 60)}:${(timestamp % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white/15 rounded-lg p-4 hover:bg-white/25 transition-colors cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
        <span className="text-white bg-primary px-3 py-1 rounded-full text-sm">
          {formatTimestamp(topic.timestamp[0])}
        </span>
      </div>
      {topic.type === "factCheck" && (
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`bg-orange-500 px-2 py-1 rounded text-xs text-white`}
          >
            {topic.verdict}
          </span>
        </div>
      )}
      <p className="text-white/80 text-sm">{topic.description}</p>
    </div>
  );
};

export default TopicCard;

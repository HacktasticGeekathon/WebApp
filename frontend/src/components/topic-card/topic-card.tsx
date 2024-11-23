import React from "react";
import { FactCheck, TopicCardProps } from "../../types";

const TopicCard: React.FC<TopicCardProps> = ({ topic, onClick }) => {
  const getVerdictColor = (verdict: FactCheck["verdict"]) => {
    const colors = {
      True: "bg-green-500",
      False: "bg-red-500",
      "Partially True": "bg-yellow-500",
      Misleading: "bg-orange-500",
    };
    return colors[verdict];
  };

  const formatTimestamp = (timestamp: number) => {
    return `${Math.floor(timestamp / 60)}:${(timestamp % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
        <span className="text-white bg-primary px-3 py-1 rounded-full text-sm">
          {formatTimestamp(topic.timestamp)}
        </span>
      </div>
      {topic.type === "factCheck" && (
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`${getVerdictColor(
              topic.verdict
            )} px-2 py-1 rounded text-xs text-white`}
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

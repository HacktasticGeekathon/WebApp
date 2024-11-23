import YoutubePlayer from "../components/youtube-player/youtube-player";
import TopicCard from "../components/topic-card/topic-card";
import { FactCheck, Fallacy } from "../types";

const Video = () => {
  // Example data - replace with actual data from your API
  const fallacies: Fallacy[] = [
    {
      type: "fallacy",
      title: "Ad Hominem",
      description:
        "Attack on the opponent's character rather than their argument",
      timestamp: 45,
    },
    {
      type: "fallacy",
      title: "Straw Man",
      description:
        "Misrepresenting opponent's argument to make it easier to attack",
      timestamp: 120,
    },
  ];

  const factChecks: FactCheck[] = [
    {
      type: "factCheck",
      title: "Statement about economic growth",
      verdict: "Partially True",
      description:
        "While the numbers are accurate, important context is missing",
      timestamp: 30,
    },
    {
      type: "factCheck",
      title: "Claim about immigration statistics",
      verdict: "False",
      description: "Official data contradicts this statement",
      timestamp: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70">
      <div className="container mx-auto px-4 py-8">
        {/* Video Player Section */}
        <div className="mb-12">
          <YoutubePlayer />
        </div>

        {/* Analysis Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fallacies Section */}
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Logical Fallacies
            </h2>
            <div className="space-y-4">
              {fallacies.map((fallacy, index) => (
                <TopicCard
                  key={`fallacies-${index}`}
                  topic={fallacy}
                  onClick={(): void =>
                    console.log(`Seeking Fallacy to > ${fallacy.timestamp}`)
                  }
                />
              ))}
            </div>
          </div>

          {/* Fact Checks Section */}
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Fact Checks</h2>
            <div className="space-y-4">
              {factChecks.map((check, index) => (
                <TopicCard
                  key={index}
                  topic={check}
                  onClick={() => {
                    console.log(`Seeking Fact check to > ${check.timestamp}`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "../components/feature-card/feature-card";
import ExampleCard from "../components/example-card/example-card";

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!videoUrl) return;

    try {
      // Basic validation for YouTube URL
      const url = new URL(videoUrl);
      if (
        url.hostname.includes("youtube.com") ||
        url.hostname.includes("youtu.be")
      ) {
        // Encode the URL to handle special characters
        const encodedUrl = encodeURIComponent(videoUrl);
        navigate(`/video?url=${encodedUrl}`);
      } else {
        console.error("Not a YouTube URL");
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
    }
  };

  // Hardcoded example data
  const examples = [
    {
      title: "Trump about Nord Stream 2",
      description: 'Trump reveals to Tucker who "killed" the Nord Stream 2.',
      thumbnail: "https://img.youtube.com/vi/zpKwjIhDkPM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=zpKwjIhDkPM",
    },
    {
      title: "Trump false claim on immigrants",
      description:
        "Trump repeats false claims of immigrants eating pets during debate with Harris.",
      thumbnail: "https://img.youtube.com/vi/K16HAiBALMc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=K16HAiBALMc",
    },
    {
      title: "Hillary Clinton Concession Speech",
      description:
        "She spoke of the pain of defeat and hopes for the success of Donald Trump's presidency.",
      thumbnail: "https://img.youtube.com/vi/-yHgE9W699w/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-yHgE9W699w",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70">
      {/* Header Section */}
      <header className="py-4 shadow">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">Veritas</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Detect Logical Fallacies in
            <span className="block mt-2">Political Speech</span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            AI-powered analysis to identify logical fallacies and fact-check
            political speeches in real-time.
          </p>

          {/* Video Input Section */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleAnalyze} className="relative">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste YouTube video URL here..."
                className="w-full px-6 py-4 rounded-full text-gray-700 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
              >
                Analyze
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/90 text-center mb-8">
            Examples
          </h1>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {examples.map((example, index) => (
              <ExampleCard
                key={index}
                title={example.title}
                description={example.description}
                thumbnail={example.thumbnail}
                videoUrl={example.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/10 backdrop-blur-md py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title="Fallacy Detection"
              description="Identifies common logical fallacies like ad hominem, straw man, and false equivalence in political speeches."
              icon="🔍"
            />
            <FeatureCard
              title="Real-time Fact Checking"
              description="Cross-references statements with reliable sources to verify claims and provide accurate information."
              icon="✓"
            />
            <FeatureCard
              title="Bias Analysis"
              description="Highlights potential biases and misleading rhetoric in political discourse."
              icon="⚖️"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

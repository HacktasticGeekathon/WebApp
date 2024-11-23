import FeatureCard from "../components/feature-card/feature-card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70">
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
            <div className="relative">
              <input
                type="text"
                placeholder="Paste YouTube video URL here..."
                className="w-full px-6 py-4 rounded-full text-gray-700 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors">
                Analyze
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/10 backdrop-blur-md py-20">
        <div className="container mx-auto px-4">
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

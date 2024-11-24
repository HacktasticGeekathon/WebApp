import React from "react";

interface PageLoaderProps {
  message: string;
  thumbnail?: string;
  statusMessages: string[];
}

const PageLoader: React.FC<PageLoaderProps> = ({
  message,
  thumbnail,
  statusMessages,
}) => {
  const combinedMessages = [message, ...statusMessages.slice(0, 2)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70 flex flex-col items-center justify-center">
      {/* Thumbnail Image */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="mb-8 w-36 h-36 object-cover rounded-2xl"
        />
      )}

      {/* Spinner Animation */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin">
          <div className="h-full w-full rounded-full border-4 border-t-white/80 border-r-white/40 border-b-white/20 border-l-white/60"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 animate-ping">
          <div className="h-full w-full rounded-full border-4 border-white/20"></div>
        </div>
      </div>

      {/* Combined Messages */}
      <div className="text-center mb-4">
        {combinedMessages
          .slice(1, combinedMessages.length)
          .map((msg, index) => (
            <div key={index} className="flex items-center justify-center">
              <p
                className={`text-xl text-white/90 font-medium ${
                  index === 0 ? "animate-pulse" : "text-white/40"
                }`}
              >
                {index === 0 ? msg : msg.replace(/\.+$/, "")}
              </p>
              {index > 0 && <span className="ml-2 text-white/40">✔</span>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PageLoader;

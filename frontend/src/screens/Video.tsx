import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import YoutubePlayer from "../components/youtube-player/youtube-player";
import TopicCard from "../components/topic-card/topic-card";
import { FactCheck, Fallacy, Marker, VideoData } from "../types";
import { capitalizeType } from "../helpers";
import { APITypes } from "plyr-react";
import PageLoader from "../components/page-loader/page-loader";

const initialVideoDataState: VideoData = { video: "", thumbnail: "" };

const Video = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const playerRef = useRef<APITypes>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const [videoData, setVideoData] = useState<VideoData>(initialVideoDataState);
  const [statusMessages, setStatusMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Get the URL from query params
  const videoUrl = searchParams.get("url");

  useEffect(() => {
    if (!videoUrl || wsRef.current) return;

    // Decode the URL
    const decodedUrl = decodeURIComponent(videoUrl);

    // Create WebSocket connection
    wsRef.current = new WebSocket("ws://127.0.0.1:8000/process");
    // Connection opened
    wsRef.current.onopen = () => {
      console.log("Connected to WebSocket");
      // Send the video URL to the server when connection is established
      wsRef.current?.send(decodedUrl);
      console.log("SEND REQUEST");
    };

    // Listen for messages
    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.video || data.thumbnail) return setVideoData(data);

        // Update status messages
        setStatusMessages((prevMessages) => {
          const updatedMessages = [data.status, ...prevMessages];
          return updatedMessages;
        });

        if (data.status === "Fetching facts analysis...") setLoading(false);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    // Handle errors
    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Handle connection close
    wsRef.current.onclose = () => {
      console.log("Disconnected from WebSocket");
      wsRef.current = null; // Clear the ref when connection closes
    };

    // Cleanup on component unmount
    return () => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [videoUrl]);

  // Redirect to home if no URL is provided
  if (!videoUrl) {
    navigate("/");
    return null;
  }

  const handleTopicClick = (timestamp: number) => () => {
    if (playerRef.current) {
      playerRef.current.plyr.currentTime = timestamp;
    }
  };

  // Example data - replace with actual data from your API
  const fallacies: Fallacy[] = [
    {
      type: "fallacy",
      title: "Ad Hominem",
      description:
        "Attack on the opponent's character rather than their argument",
      timestamp: 2,
    },
    {
      type: "fallacy",
      title: "Straw Man",
      description:
        "Misrepresenting opponent's argument to make it easier to attack",
      timestamp: 10,
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
      verdict: "Misleading",
      description: "Official data contradicts this statement",
      timestamp: 22,
    },
  ];

  const markers: Marker[] = [...factChecks, ...fallacies].map((m) => {
    return {
      label: `${capitalizeType(m.type)} - ${m.title}`,
      time: m.timestamp,
    };
  });

  if (loading) {
    // Pass the most recent status message as the message prop
    const currentMessage = statusMessages[0] || "Loading...";
    return (
      <PageLoader
        message={currentMessage} // Use the latest status message
        thumbnail={videoData.thumbnail}
        statusMessages={statusMessages}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70">
      <div className="container mx-auto px-4 py-8">
        {/* Video Player Section */}
        <div className="mb-12">
          <YoutubePlayer
            videoData={videoData}
            markers={markers}
            playerRef={playerRef}
          />
        </div>

        {/* Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fallacies Section */}
          {fallacies && fallacies.length > 0 && (
            <div
              className={`bg-ternary/20 backdrop-blur-md rounded-xl p-6 ${
                !factChecks.length ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Logical Fallacies
              </h2>
              <div className="space-y-4">
                {fallacies.map((fallacy, index) => (
                  <TopicCard
                    key={`fallacies-${index}`}
                    topic={fallacy}
                    onClick={handleTopicClick(fallacy.timestamp)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Fact Checks Section */}
          {factChecks && factChecks.length > 0 && (
            <div className="bg-ternary/20 backdrop-blur-md rounded-xl p-6 md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                Fact Checks
              </h2>
              <div className="space-y-4">
                {factChecks.map((check, index) => (
                  <TopicCard
                    key={`factCheck-${index}`}
                    topic={check}
                    onClick={handleTopicClick(check.timestamp)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;

import { useNavigate } from "react-router-dom";

const ExampleCard = ({
  title,
  description,
  thumbnail,
  videoUrl,
}: {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video?url=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div
      className="bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/90 backdrop-blur-sm rounded-xl p-4 text-white hover:transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
      onClick={handleClick}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default ExampleCard;

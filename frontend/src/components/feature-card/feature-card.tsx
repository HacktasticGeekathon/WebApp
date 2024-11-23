const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/80 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;

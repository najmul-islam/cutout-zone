const FeatureCard = ({ icon, description }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="min-h-16 min-w-16 rounded bg-[#0979E4] p-4 text-3xl text-white">
        {icon}
      </span>
      <p className="text-[#999999]">{description}</p>
    </div>
  );
};
export default FeatureCard;

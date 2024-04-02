const FeatureCard = ({ icon, description }) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="min-w-16 min-h-16 bg-[#3C93A8] text-3xl p-4 text-white">
        {icon}
      </span>
      <p>{description}</p>
    </div>
  );
};
export default FeatureCard;

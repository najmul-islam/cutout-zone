const FeatureCard = ({ icon, description }) => {
  // #404142
  //#09579F
  return (
    <div className="flex items-center gap-4">
      <span className="min-h-16 min-w-16 rounded bg-[#0254B1] p-4 text-3xl text-white">
        {icon}
      </span>
      <p className="text-[#404142]">{description}</p>
    </div>
  );
};
export default FeatureCard;

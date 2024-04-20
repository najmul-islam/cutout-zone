const SkillCard = ({ icon, figure, suffix, title }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="mb-2 text-center text-8xl text-[#0254B1]">{icon}</span>
      <h2 className="text-2xl font-medium">
        {figure}
        {suffix}
      </h2>
      <p className="text-[#404142]">{title}</p>
    </div>
  );
};
export default SkillCard;

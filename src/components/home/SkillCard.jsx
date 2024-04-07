const SkillCard = ({ icon, figure, suffix, title }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="mb-2 text-center text-8xl text-[#0979E4]">{icon}</span>
      <h6 className="text-2xl font-medium">
        {figure}
        {suffix}
      </h6>
      <p className="text-[#999999]">{title}</p>
    </div>
  );
};
export default SkillCard;

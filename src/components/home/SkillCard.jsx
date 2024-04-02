const SkillCard = ({ icon, figure, suffix, title }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="text-8xl text-center text-[#3C93A8]">{icon}</span>
      <h6 className="text-2xl font-medium">
        {figure}
        {suffix}
      </h6>
      <p>{title}</p>
    </div>
  );
};
export default SkillCard;

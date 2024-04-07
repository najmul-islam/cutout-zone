const ReasonCard = ({ icon, description }) => {
  return (
    <li className="flex items-center gap-3">
      <div className="flex h-[50px] w-[64px] items-center justify-center rounded bg-[#0979E4] text-[35px] text-white">
        {icon}
      </div>
      <p className="text-[18px] text-black">{description}</p>
    </li>
  );
};
export default ReasonCard;

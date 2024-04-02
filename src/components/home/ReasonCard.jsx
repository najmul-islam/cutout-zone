const ReasonCard = ({ icon, description }) => {
  return (
    <li className="flex items-center gap-3">
      <div className="w-[64px] h-[64px] rounded-full text-white text-[40px] bg-[#4493A7] p-3">
        {icon}
      </div>
      <p className="text-[18px]">{description}</p>
    </li>
  );
};
export default ReasonCard;

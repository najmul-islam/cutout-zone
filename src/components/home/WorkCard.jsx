import Image from "next/image";

const WorkCard = ({ imgUrl, description }) => {
  return (
    <div className="p-6 text-center flex flex-col items-center gap-4">
      <div className="flex justify-center items-center bg-white rounded-full w-[180px] h-[180px]">
        <Image
          src={`/work/${imgUrl}`}
          className="m-auto"
          width={80}
          height={80}
        />
      </div>

      <p className="text-black font-medium text-center">{description}</p>
    </div>
  );
};
export default WorkCard;

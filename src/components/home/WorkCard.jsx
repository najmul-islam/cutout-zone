import Image from "next/image";

const WorkCard = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 text-center">
      <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full bg-white transition-shadow duration-200 hover:shadow-md">
        <Image
          src={`/work/${imgUrl}`}
          className="m-auto"
          width={80}
          height={80}
          alt={title}
        />
      </div>

      <p className="text-center font-medium text-black">{description}</p>
    </div>
  );
};
export default WorkCard;

import Image from "next/image";

const PricingCard = ({ imgUrl, title, price }) => {
  return (
    <div className="rounded bg-[#F8F8F8] p-6 text-center">
      <Image
        src={`/pricing/${imgUrl}`}
        className="m-auto"
        width={300}
        height={250}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#0254B1]">{title}</h2>
        <p className="text-[#404142]">{price}</p>
      </div>
    </div>
  );
};
export default PricingCard;

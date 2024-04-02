import Image from "next/image";

const PricingCard = ({ imgUrl, title, price }) => {
  return (
    <div className="bg-white p-6 text-center rounded">
      <Image
        src={`/pricing/${imgUrl}`}
        className="m-auto"
        width={300}
        height={250}
        alt={title}
      />

      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-[#3c93a8]">{price}</p>
      </div>
    </div>
  );
};
export default PricingCard;

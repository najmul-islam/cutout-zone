import { FaRegMap } from "react-icons/fa6";

const Address = () => {
  return (
    <div>
      <h6 className="mb-3 text-xl font-semibold text-[#0254B1]">Address</h6>

      <div className="mb-3 flex flex-col gap-1">
        <h6 className="flex items-center gap-2 text-lg">
          <FaRegMap className="text-xl text-[#0254B1]" />
          Singapore office
        </h6>
        <p className="ml-7 text-sm">
          Jalan Papan, 5A Jurong West – 619406 Singapore
        </p>
      </div>

      <div className="mb-3 flex flex-col gap-1">
        <h6 className="flex items-center gap-2 text-lg">
          <FaRegMap className="text-xl text-[#0254B1]" />
          Bangladesh office
        </h6>
        <p className="ml-7 text-sm">
          House # 6/1, Dhanmondi Dhaka – 1205 Bangladesh
        </p>
      </div>
    </div>
  );
};
export default Address;

const Heading = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h2 className="py-3 text-center text-4xl font-semibold text-[#0979E4]">
        {title}
      </h2>
      <h6 className="text-center font-medium">{description}</h6>
    </div>
  );
};
export default Heading;

const Heading = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h2 className="md:4xl py-3 text-center text-3xl font-semibold text-[#0254B1]">
        {title}
      </h2>
      <h6 className="text-center font-medium">{description}</h6>
    </div>
  );
};
export default Heading;

const Heading = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h1 className="md:4xl py-3 text-center text-3xl font-semibold text-[#0254B1]">
        {title}
      </h1>
      <h2 className="text-center font-medium">{description}</h2>
    </div>
  );
};
export default Heading;

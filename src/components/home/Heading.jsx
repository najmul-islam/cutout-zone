const Heading = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-semibold text-center py-3">{title}</h2>
      <h6 className="font-medium text-center">{description}</h6>
    </div>
  );
};
export default Heading;

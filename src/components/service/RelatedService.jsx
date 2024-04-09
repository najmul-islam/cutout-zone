import ServiceItem from "./ServiceItem";

const RelatedService = ({ services }) => {
  return (
    <div className="container py-10">
      <h1 className="text-center text-2xl font-bold md:text-3xl">
        Related service
      </h1>
      <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
export default RelatedService;

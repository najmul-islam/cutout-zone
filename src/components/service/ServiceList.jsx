import services from "@/data/serviceData.json";
import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  return (
    <section className="py-10">
      <h1 className="text-center text-2xl font-bold text-[#0254B1] md:text-4xl">
        Our services
      </h1>
      <p className="my-3 text-center">
        CutOut Zone is simple, robust & reliable.
      </p>
      <div className="container grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
export default ServiceList;

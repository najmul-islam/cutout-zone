// import services from "@/data/serviceData.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceItem from "./ServiceItem";

const RelatedService = ({ services }) => {
  return (
    <div className="container py-10">
      <h1 className="text-center text-3xl font-bold md:text-4xl">
        Related service
      </h1>
      <div className="container grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      {/* <Carousel>
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem className="gap-3 p-3 lg:basis-1/4" key={service.id}>
              <ServiceItem service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
};
export default RelatedService;

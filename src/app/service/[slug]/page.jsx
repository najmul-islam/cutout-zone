import RelatedService from "@/components/service/RelatedService";
import SingleService from "@/components/service/SingleService";
import LetsTrySeciton from "@/components/shared/LetsTrySeciton";
import SubHeader from "@/components/shared/SubHeader";
import services from "@/data/serviceData.json";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const getPortfolioBySlug = (slug) => {
    return services.find((service) => service.slug === slug);
  };

  const service = getPortfolioBySlug(params.slug);

  return {
    title: `${services?.title} | CutOut Zone`,
    description: services?.excerpt,
    openGraph: {
      images: [
        {
          url: `/service/${service?.featured_media}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return services?.map((service) => ({
    slug: service.slug,
  }));
}

const SingleServicePage = ({ params }) => {
  const getServiceBySlug = (slug) => {
    return services.find((item) => item.slug === slug);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRelatedServices = (slug) => {
    const otherServices = services.filter((item) => item.slug !== slug);
    const shuffledServices = shuffleArray(otherServices);
    const selectedServices = shuffledServices.slice(0, 4);

    return selectedServices;
  };

  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const relatedService = getRelatedServices(params.slug);

  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/service", title: "Service" },
    {
      id: 3,
      link: `/service/${service?.slug}`,
      title: `${service?.title}`,
    },
  ];

  return (
    <>
      <SubHeader
        imgUrl="Page-Single-Service-Subheader.jpg"
        title={service?.title}
        links={links}
      />
      <SingleService service={service} />
      <RelatedService services={relatedService} />
      <LetsTrySeciton />
    </>
  );
};
export default SingleServicePage;

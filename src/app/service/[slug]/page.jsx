import FeaturedMedia from "@/components/service/FeaturedMedia";
import RelatedService from "@/components/service/RelatedService";
import Sidebar from "@/components/service/Sidebar";
import SingleService from "@/components/service/SingleService";
import LetsTrySeciton from "@/components/shared/LetsTrySeciton";
import SubHeader from "@/components/shared/SubHeader";
import services from "@/data/serviceData.json";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }, parent) {
  const getPortfolioBySlug = (slug) => {
    return services.find((service) => service?.slug === slug);
  };

  const service = getPortfolioBySlug(params?.slug);
  const prevImg = parent.openGraph?.images || [];
  return {
    title: service?.meta_title,
    description: service?.meta_description,
    alternates: {
      canonical: `/service/${service?.slug}`,
    },
    openGraph: {
      images: [
        {
          url: `/service/og/${service.og_media}`,
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

const SingleServicePage = ({ params }) => {
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
      <div className="container grid grid-cols-1 gap-2 md:grid-cols-4">
        <div className="py-5 md:col-span-4">
          <FeaturedMedia service={service} />
        </div>
        <div className="md:col-span-1">
          <Sidebar service={service} />
        </div>
        <div className="md:col-span-3">
          <SingleService service={service} />
        </div>
      </div>

      <RelatedService services={relatedService} />
      <LetsTrySeciton />
    </>
  );
};
export default SingleServicePage;

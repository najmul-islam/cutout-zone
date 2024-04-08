import ServiceList from "@/components/service/ServiceList";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Photo processing service list | Photo editing services",
  description:
    "CutOut Zone is a place where your images will have a brand new look. Our professional designers are always creative knowledge",
};

const ServicePage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/service", title: "Service" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-Service-Subheader.jpg"
        title="Service"
        links={links}
      />
      <ServiceList />
    </>
  );
};
export default ServicePage;

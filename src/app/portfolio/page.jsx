import PortfolioList from "@/components/portfolio/PortfolioList";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Portfolio | Image Work Samples | Image Editing Portfolio",
  description:
    "We are continuously developing ourselves to provide you the best image manipulation service. you can view some work samples in photoshop",
};

const PortfolioPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/portfolio", title: "Portfolio" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-Portfolio-Subheader.jpg"
        title="Portfolio"
        links={links}
      />
      <PortfolioList />
    </>
  );
};
export default PortfolioPage;

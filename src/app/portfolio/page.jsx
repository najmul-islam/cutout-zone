import PortfolioList from "@/components/portfolio/PortfolioList";
import SubHeader from "@/components/shared/SubHeader";

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

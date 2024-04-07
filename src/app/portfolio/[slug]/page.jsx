import SinglePortfolio from "@/components/portfolio/SinglePortfolio";
import SubHeader from "@/components/shared/SubHeader";
import portfolios from "@/data/portfolioData.json";

const SinglePortfolioPage = ({ params }) => {
  // Function to get a portfolio item by slug
  const getPortfolioBySlug = (slug) => {
    return portfolios.find((item) => item.slug === slug);
  };
  // Function to get the previous portfolio item
  const getPrevPortfolio = (slug) => {
    const currentIndex = portfolios.findIndex((item) => item.slug === slug);
    const prevIndex =
      (currentIndex - 1 + portfolios.length) % portfolios.length;
    return portfolios[prevIndex];
  };

  // Function to get the next portfolio item
  const getNextPortfolio = (slug) => {
    const currentIndex = portfolios.findIndex((item) => item.slug === slug);
    const nextIndex = (currentIndex + 1) % portfolios.length;
    return portfolios[nextIndex];
  };

  const portfolio = getPortfolioBySlug(params.slug);
  const prevPortfolio = getPrevPortfolio(params.slug);
  const nextPortfolio = getNextPortfolio(params.slug);

  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/portfolio", title: "Portfolio" },
    {
      id: 3,
      link: `/portfolio/${portfolio.slug}`,
      title: `${portfolio.title}`,
    },
  ];

  return (
    <>
      <SubHeader
        imgUrl="Page-Single-Portfolio-Subheader.jpg"
        title={portfolio.title}
        links={links}
      />
      <SinglePortfolio
        portfolio={portfolio}
        prevPortfolio={prevPortfolio}
        nextPortfolio={nextPortfolio}
      />
    </>
  );
};
export default SinglePortfolioPage;

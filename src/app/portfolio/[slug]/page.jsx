import { notFound } from "next/navigation";
import SinglePortfolio from "@/components/portfolio/SinglePortfolio";
import SubHeader from "@/components/shared/SubHeader";
import portfolios from "@/data/portfolioData.json";

export async function generateMetadata({ params }) {
  const getPortfolioBySlug = (slug) => {
    return portfolios.find((item) => item?.slug === slug);
  };

  const portfilio = getPortfolioBySlug(params.slug);

  return {
    title: `${portfilio?.meta_title} | CutOut Zone`,
    description: portfilio?.meta_description,
    openGraph: {
      images: [
        {
          url: `/portfolio/${portfilio?.featured_media}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return portfolios.map((portfoli) => ({
    slug: portfoli.slug,
  }));
}

const getPortfolioBySlug = (slug) => {
  return portfolios.find((item) => item.slug === slug);
};

const getPrevPortfolio = (slug) => {
  const currentIndex = portfolios.findIndex((item) => item.slug === slug);
  const prevIndex = (currentIndex - 1 + portfolios.length) % portfolios.length;
  return portfolios[prevIndex];
};

const getNextPortfolio = (slug) => {
  const currentIndex = portfolios.findIndex((item) => item.slug === slug);
  const nextIndex = (currentIndex + 1) % portfolios.length;
  return portfolios[nextIndex];
};

const SinglePortfolioPage = ({ params }) => {
  const portfolio = getPortfolioBySlug(params.slug);
  if (!portfolio) {
    notFound();
  }
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

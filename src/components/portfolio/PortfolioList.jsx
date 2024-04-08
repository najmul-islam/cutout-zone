import portfolioData from "@/data/portfolioData.json";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-center text-2xl font-bold text-[#0979E4] md:text-4xl">
          See our amazing works
        </h1>
        <p className="my-3 text-center">Explore Our Creative Portfolio</p>

        <div className="grid grid-cols-1 place-content-center gap-6 py-20 sm:grid-cols-3">
          {portfolioData.map((portfolio) => (
            <PortfolioItem key={portfolio.id} item={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioList;

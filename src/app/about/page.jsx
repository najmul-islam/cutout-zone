import AboutContent from "@/components/about/AboutContent";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "About US | Best Photo Editing Service provider company",
  description:
    "CutOut Zone is an Image Enhancing Service Provider.We have 50+ well-trained and experienced set of professional graphic designers",
};

const AboutPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/about", title: "About" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-About-Subheader.jpg"
        title="About"
        links={links}
      />
      <AboutContent />
    </>
  );
};
export default AboutPage;

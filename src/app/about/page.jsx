import AboutContent from "@/components/about/AboutContent";
import SubHeader from "@/components/shared/SubHeader";

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

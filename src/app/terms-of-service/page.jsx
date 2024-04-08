import SubHeader from "@/components/shared/SubHeader";
import ContentSection from "@/components/terms-of-service/ContentSection";

export const metadata = {
  title: "Terms and conditions | photo Editing Service Company",
  description:
    "CutOut Zone Specialist Terms and Conditions You will accept If you do not agree to these Terms you must not use our Website",
};

const TermsOfServicePage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/terms-of-service", title: "Terms of Service" },
  ];

  return (
    <>
      <SubHeader
        imgUrl="Page-Terms-of-service-Subheader.jpg"
        title="Terms of Service"
        links={links}
      />
      <ContentSection />
    </>
  );
};
export default TermsOfServicePage;

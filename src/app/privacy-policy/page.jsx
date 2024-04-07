import ContentSection from "@/components/privacy-policy/ContentSection";
import SubHeader from "@/components/shared/SubHeader";

const PrivacyPolicyPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/privacy-policy", title: "Privacy Policy" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-Privacy-Policy-Subheader.jpg"
        title="Privacy Policy"
        links={links}
      />
      <ContentSection />
    </>
  );
};
export default PrivacyPolicyPage;

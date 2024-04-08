import ContentSection from "@/components/privacy-policy/ContentSection";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Privacy Policy | Photo Editing & Retouching Company",
  description:
    "Privacy policy The most necessary thing to CutOut Zones is your privacy. Its is our responsibility to protect your privacy",
};

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

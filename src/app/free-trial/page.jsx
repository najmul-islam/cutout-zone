import Heading from "@/components/free-trial/Heading";
import TrialForm from "@/components/free-trial/TrialForm";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Free Trial for Quality Checking | Submit Your Photo",
  description:
    "CutOut Zone is a complete photo editing solution for customers to test online. we offer you 1-2 Free Trial Image Quality ensure.",
};

const FreeTrialPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/free-trial", title: "Free Trial" },
  ];

  return (
    <>
      <SubHeader
        imgUrl="Page-Trial-Subheader.jpg"
        title="Free Trial"
        links={links}
      />
      <Heading />
      <TrialForm />
    </>
  );
};
export default FreeTrialPage;

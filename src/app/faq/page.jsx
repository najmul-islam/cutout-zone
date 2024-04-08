import AskQuestion from "@/components/faq/AskQuestion";
import Heading from "@/components/faq/Heading";
import SecurityFaq from "@/components/faq/SecurityFaq";
import ServiceFaq from "@/components/faq/ServiceFaq";
import SupportFaq from "@/components/faq/SupportFaq";
import LetsTrySeciton from "@/components/shared/LetsTrySeciton";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Question & Answer section Regarding Image Editing",
  description:
    "FTP file transfer or receiving is a very flexible and easy way if anyone familiar with FTP then he can send us a request for an FTP account",
};

const FaqPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/faq", title: "Frequently Asked Questions" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-FAQ-Subheader.jpg"
        title="Frequently Asked Questions"
        links={links}
      />
      <Heading />
      <ServiceFaq />
      <SecurityFaq />
      <SupportFaq />
      <AskQuestion />
      <LetsTrySeciton />
    </>
  );
};
export default FaqPage;

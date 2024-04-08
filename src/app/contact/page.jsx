import AddressSection from "@/components/contact/AddressSection";
import FormSection from "@/components/contact/FormSection";
import MapSection from "@/components/contact/MapSection";
import ReachUsSection from "@/components/contact/ReachUsSection";
import ActionSection from "@/components/shared/ActionSection";
import SubHeader from "@/components/shared/SubHeader";

export const metadata = {
  title: "Contact us best clipping path service | 24 Hours Support",
  description:
    "If you have any questions, you can contact us round the clock. Our online support team is ready to help you and take care of your ",
};

const ContactPage = () => {
  const links = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/contact", title: "Contact" },
  ];
  return (
    <>
      <SubHeader
        imgUrl="Page-Contact-Subheader.jpg"
        title="Contact"
        links={links}
      />
      <AddressSection />
      <FormSection />
      <ReachUsSection />
      <MapSection />
      <ActionSection />
    </>
  );
};
export default ContactPage;

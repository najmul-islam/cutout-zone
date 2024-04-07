import AddressSection from "@/components/contact/AddressSection";
import FormSection from "@/components/contact/FormSection";
import MapSection from "@/components/contact/MapSection";
import ReachUsSection from "@/components/contact/ReachUsSection";
import ActionSection from "@/components/shared/ActionSection";
import SubHeader from "@/components/shared/SubHeader";

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

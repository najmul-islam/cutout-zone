import Heading from "./Heading";
import Section from "./Section";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  return (
    <Section className="bg-[#F1F1F1]">
      <Heading
        title="How we works"
        description="Our working process at a glance."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <WorkCard
          imgUrl="icon-delivery.webp"
          title="Client Service Selection and Ordering"
          description="Firstly, our clients select a necessary service and give an order."
        />

        <WorkCard
          imgUrl="icon-download.webp"
          title="Image Transfer to Production Manager"
          description="Then we proceed to transfer all the downloaded images to the production manager."
        />

        <WorkCard
          imgUrl="icon-networking.webp"
          title="Sorting Images for Post-Production"
          description="Then we sort them out and send them to the post-production."
        />

        <WorkCard
          imgUrl="icon-palette.webp"
          title="Assigning Expert Designers to Project Work"
          description="Then assigned our expert designers to begin the related work."
        />
        <WorkCard
          imgUrl="icon-list.webp"
          title="Quality Check by QC Team"
          description="Then our qualified QC team checks them to ensure their quality."
        />

        <WorkCard
          imgUrl="icon-order.webp"
          title="Final Check and Client Delivery"
          description="Then we make a final check and render them to our clients as instructed."
        />
      </div>
    </Section>
  );
};
export default WorkSection;

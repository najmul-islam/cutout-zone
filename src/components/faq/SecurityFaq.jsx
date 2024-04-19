import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SecurityFaq = () => {
  return (
    <section className="container mb-6">
      <div className="m-auto max-w-[600px] rounded border p-4 pb-0">
        <h1 className="mb-2 text-center text-xl font-bold md:text-3xl">
          Security Related FAQ
        </h1>
        <p className="mb-4 text-center">Know more about our security.</p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start text-lg">
              Is it safe to use FTP?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Yes, it is 100% safe without any doubt. It is highly secured as it
              is a paid file transferring protocol. We understand the value of
              your images and we are committed to receiving your files with the
              highest security and confidentiality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start text-lg">
              Can I file a case against you, if my images are sold to the third
              parties?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Yes, if anyone of us sells pictures to the third parties and he is
              caught red-handed, you can file a case against him according to
              our constitutional law. Apart from that, we will take disciplinary
              action against him. We will not also hesitate to co-operate with
              you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start text-lg">
              What information do I have to provide to get your service?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              We sometimes may gather your personal information to provide you
              with the best service. The information we collect depends on our
              offer, promotion, and survey. Please fill up a personal
              information form which is given on our website, if you like us to
              get you the best service.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start text-lg">
              What information do I have to provide to get your service?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              We sometimes may gather your personal information to provide you
              with the best service. The information we collect depends on our
              offer, promotion, and survey. Please fill up a personal
              information form which is given on our website, if you like us to
              get you the best service.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b-0">
            <AccordionTrigger className="text-start text-lg">
              How can I contact you?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              We believe that keeping close contact with our clients increases a
              deep & sincere relationship between us. That’s why we are
              available 24/7 round the clock and 365 days all the year round.
              You can visit our website’s “contact us” page from the link given
              below.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default SecurityFaq;

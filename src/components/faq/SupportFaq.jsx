import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SupportFaq = () => {
  return (
    <section className="container mb-6">
      <div className="m-auto max-w-[600px] rounded border p-4 pb-0">
        <h1 className="mb-2 text-center text-xl font-bold md:text-3xl">
          Support Related FAQ
        </h1>
        <p className="mb-4 text-center">
          How to get in touch and deal with us.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start text-lg">
              Are you open 24 hours?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Yes, our well-trained team works 24/7 and 365 days. We work not
              only in the day but also at night so that our team can provide
              your appointed work on due time. For this, you can also get in
              touch with us on the US holidays
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start text-lg">
              What if I am not satisfied with your service?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              We always work hard to maintain our quality with our own guideline
              or according to our clients’ direction strictly to ensure the most
              quality work. However, we give you 100% money back guarantee as
              per company rules if you are not satisfied. Apart from that, you
              can also make a revision request within 3 days of delivery. Our
              support team will help you with delight.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start text-lg">
              Do you have a quick delivery system?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              If it is necessary to process a large number of images within a
              very short period of time, in that case, our quick delivery
              service is the best solution. This service gives you a special
              facility to get the work done quickly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start text-lg">
              Will I be charged for revision request?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Of course not, but you have to follow our company’s policy. If you
              want to make a revision request, you have to do it within 3 days
              of delivery. Otherwise, you will have to pay for this task once
              again.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b-0">
            <AccordionTrigger className="text-start text-lg">
              Can I get instant support from you?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Yes, you can get our instant support from us. As we have a support
              team who work hard and stay online round the clock to take care of
              your problem. If you want to have our instant support, you can
              reach us via Skype, Facebook and Email us directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default SupportFaq;

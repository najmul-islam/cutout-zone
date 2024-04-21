import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceFaq = () => {
  return (
    <section className="container mb-6">
      <div className="m-auto max-w-[600px] rounded border p-4 pb-0">
        <h2 className="mb-2 text-center text-xl font-bold md:text-3xl">
          Service Related FAQ
        </h2>
        <p className="mb-4 text-center">
          Service we provide and how to get them.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start text-lg tracking-widest">
              How can I send & receive my images?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              FTP file transfer or receiving is a very flexible and easy way if
              anyone familiar with FTP then he can send us a request for an FTP
              account and then we will create an account & send the info to him.
              Image size is not a problem because we are using unlimited disc
              space on your for the FTP account. If you want to send us a large
              size of images at a time, then FTP is the right option. When we
              share an FTP user access with a client, please save it. Since it’s
              so secure access and it’s only shared with the client and with the
              CutOut Zone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start text-lg">
              Can I get free trail facilities?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Yes. We do offer a free trial facility which is up to 2 images so
              that you can judge our service quality standard before taking your
              final decision. You can give your sample images to us so that we
              can provide you the completed task as a demo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start text-lg">
              Which image format do you usually accept?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Over the years, our skill has developed so far, we can work with
              various images formats. We usually accept the following types of
              images (AI, TIFF, PSD, JPEG, PNG, CR2 etc). However feel free to
              <a href="/contact">contact us</a>, it does not matter what the
              image format is.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start text-lg">
              What is your turnaround time?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              Well, it totally depends on image quality, quantity and level of
              complexity. When we send our price quotes, we will let you know
              the required time frame for finishing your task. We are committed
              to complete our work on time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b-0">
            <AccordionTrigger className="text-start text-lg">
              How & when do I have to pay?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base">
              When-ever your appointed task is completed; we will send you an
              invoice. We usually want our valuable clients to send our payment
              via PayPal. We have other options too. We have a bank account so
              that you can transfer money to that account directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default ServiceFaq;

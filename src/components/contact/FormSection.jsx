import ContactForm from "@/components/shared/ContactForm";

const FormSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-10" suppressHydrationWarning={false}>
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-3 lg:pr-6">
          <h1 className="text-center text-3xl font-semibold text-[#0254B1] lg:text-start">
            Write a message
          </h1>
          <p className="text-center lg:text-start">
            If you have any queries or questions, you can contact us round the
            clock. Our online support team is ready to help you and take care of
            your problems 24/7 & 365 days of the years.
          </p>
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default FormSection;

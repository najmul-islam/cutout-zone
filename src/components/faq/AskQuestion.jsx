import ContactForm from "@/components/shared/ContactForm";

const AskQuestion = () => {
  return (
    <section className="container pb-10">
      <div className="m-auto max-w-[600px] rounded border p-3">
        <h1 className="mb-2 text-center text-xl font-bold md:text-3xl">
          Ask a Question
        </h1>
        <p className="mb-4 text-center">
          Never feel hesitate to ask us any question.
        </p>

        <ContactForm />
      </div>
    </section>
  );
};
export default AskQuestion;

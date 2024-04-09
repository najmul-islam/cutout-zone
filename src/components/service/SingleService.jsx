const SingleService = ({ service }) => {
  return (
    <section className="container xl:w-5/12">
      <article
        className="prose prose-h1:text-center prose-h1:text-2xl md:prose-h1:text-3xl m-auto max-w-none px-5 py-10"
        dangerouslySetInnerHTML={{ __html: service?.content }}
      ></article>
    </section>
  );
};
export default SingleService;

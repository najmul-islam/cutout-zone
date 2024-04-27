const SingleService = ({ service }) => {
  const { content } = service;
  return (
    <article
      className="prose m-auto max-w-none prose-h1:text-center  prose-h1:text-2xl prose-h2:text-xl prose-img:m-auto md:p-6 md:prose-h1:text-3xl md:prose-h2:text-2xl md:prose-img:w-full"
      dangerouslySetInnerHTML={{ __html: content }}
    ></article>
  );
};
export default SingleService;

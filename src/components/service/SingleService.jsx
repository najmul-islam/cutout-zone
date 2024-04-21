import Image from "next/image";

const SingleService = ({ service }) => {
  //prose-h1:text-2xl md:prose-h1:text-3xl
  const { title, featured_media, content } = service;
  return (
    <section className="container">
      <Image
        src={`/service/${featured_media}`}
        alt={title}
        width={433}
        height={123}
        className="m-auto w-[1000px] "
        placeholder="blur"
        blurDataURL={`/service/${featured_media}`}
      />
      <article
        className="prose m-auto max-w-none px-5 py-10 prose-h1:text-center prose-h1:text-2xl prose-h2:text-xl prose-img:m-auto md:w-9/12 md:prose-h1:text-3xl md:prose-h2:text-2xl md:prose-img:w-full lg:w-7/12 "
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </section>
  );
};
export default SingleService;

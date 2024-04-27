import Image from "next/image";

const FeaturedMedia = ({ service }) => {
  const { title, featured_media } = service;
  return (
    <Image
      src={`/service/${featured_media}`}
      alt={title}
      width={1200}
      height={343}
      className="m-auto"
      placeholder="blur"
      blurDataURL={`/service/${featured_media}`}
    />
  );
};
export default FeaturedMedia;

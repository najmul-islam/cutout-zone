const MapSection = () => {
  return (
    <section className="container overflow-hidden py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7304.019596603465!2d90.367107!3d23.74703!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ0JzQ5LjMiTiA5MMKwMjInMDEuNiJF!5e0!3m2!1sen!2sus!4v1712343425228!5m2!1sen!2sus"
        width="100%"
        height="600px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[400px] w-[100%]  rounded border-2 border-[#0979E4] md:h-[600px]"
      ></iframe>
    </section>
  );
};
export default MapSection;

const Section = ({ children, className }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};
export default Section;

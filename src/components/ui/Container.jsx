const Container = ({ children, className, props }) => {
  return (
    <div className={`md:container md:mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};
export default Container;

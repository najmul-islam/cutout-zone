import NavLink from "./NavLink";

const BottomBar = () => {
  return (
    <div className="border-t py-4">
      <div className="container flex justify-between">
        <h6 className="">&copy; CutOut Zone.</h6>
        <NavLink />
      </div>
    </div>
  );
};
export default BottomBar;

import NavLink from "./NavLink";

const BottomBar = () => {
  return (
    <div className="border-t py-4">
      <div className="container flex justify-between">
        <h2 className="">&copy; CutOut Zone.</h2>
        <NavLink />
      </div>
    </div>
  );
};
export default BottomBar;

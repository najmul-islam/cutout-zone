import NavLink from "./NavLink";

const BottomBar = () => {
  return (
    <div className="py-10 border-t border-t-[rgba(255,255,255,0.12)] flex justify-between">
      <h6 className="text-xl">&copy; CutOut Zone.</h6>

      <NavLink />
    </div>
  );
};
export default BottomBar;

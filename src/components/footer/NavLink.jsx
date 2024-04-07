import Link from "next/link";

const NavLink = () => {
  const links = [
    { id: 1, link: "/about", text: "About" },
    { id: 2, link: "/blog", text: "Blog" },
    { id: 3, link: "/portfolio", text: "Portfolio" },
    { id: 4, link: "/faq", text: "FAQ" },
  ];
  return (
    <div className="flex items-center gap-3">
      {links.map((item) => {
        return (
          <Link
            href={item.link}
            className="font-[14px] text-black transition-all hover:underline"
          >
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};
export default NavLink;

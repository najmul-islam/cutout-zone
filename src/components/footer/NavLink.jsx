import Link from "next/link";

const NavLink = () => {
  const links = [
    { id: 1, link: "/about", text: "About" },
    { id: 2, link: "/blog", text: "Blog" },
    { id: 3, link: "/portfolio", text: "Portfolio" },
    { id: 4, link: "/faq", text: "FAQ" },
    { id: 5, link: "/sitemap", text: "Sitemap" },
  ];
  return (
    <div className="flex">
      {links.map((item) => {
        return (
          <Link
            href={item.link}
            className="block text-white ml-[10px] font-[14px] transition-all hover:underline"
          >
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};
export default NavLink;

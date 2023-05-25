import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialNav = () => {
  return (
    <nav className="navbar navbar-expand d-none d-md-block bg-light h-10">
      <div className="container">
        <Link className="navbar-text" href="/">
          info@cutoutzone.com
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              <FaFacebookF />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              <FaTwitter />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              <FaLinkedinIn />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/">
              <FaPinterestP />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SocialNav;

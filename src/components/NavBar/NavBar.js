import SearchNav from "../SearchNav";
import logo from "../../assets/images/logo/brainFlix-logo.svg";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="brain-logo" />
      <SearchNav />
    </nav>
  );
}

export default NavBar;

import Logo from "./logo";
import Nav from "./nav";

function Header() {
  return (
    <nav className="bg-transparent h-[70px] text-black flex justify-between gap-3 px-3 sm:max-w-[90%] max-w-[96%] mx-auto relative">
      <Logo />
      <Nav />
    </nav>
  );
}

export default Header;

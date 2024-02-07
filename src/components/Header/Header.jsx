import Logo from "./Logo";
import CharacterBar from "./CharacterBar";
import Timer from "./Timer";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Timer />
      <CharacterBar />
    </header>
  );
};

export default Header;

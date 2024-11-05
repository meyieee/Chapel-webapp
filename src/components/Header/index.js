import Logo from "./Logo";
import Generations from "./Generations";
const Header = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Logo text="Logo props" />
      <Generations text="Generations props" />
    </div>
  );
};

export default Header;

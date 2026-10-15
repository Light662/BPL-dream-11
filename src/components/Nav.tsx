import { BsCoin } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Nav = ({ coin }: {coin : number}) => {
  return (
    <nav className="bg-red-100">
      <div className="flex justify-between container mx-auto items-center">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>schedule</li>
        </ul>

        <h2 className="font-bold text-3xl text-black flex items-center gap-1">
          <BsCoin/>
          {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Nav;

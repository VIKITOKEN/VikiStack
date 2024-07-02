import Logo from "@img/logo.png";
import { Link } from "react-router-dom";

const Header:React.FC  = () => {
   return<header>
      <img src={Logo} alt="" loading="lazy" className="navLogo"/>
      <ul className="navList">
         <li><Link to="/">Stake</Link></li>
         <li><Link to="/">Liquidity</Link></li>
         <li></li>
      </ul>
      <div className="navAddress">
         <span>Bsc</span>
         <button className="btn">Connet Wallet</button>
      </div>
   </header>
}

export default Header;
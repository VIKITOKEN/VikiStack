import { Link } from "react-router-dom";
import{ ReactComponent as Twitter } from "@img/twitter.svg";
import{ ReactComponent as LinkedIn } from "@img/linkedin.svg";
import{ ReactComponent as Facebook } from "@img/facebook.svg";
import{ ReactComponent as Instagram } from "@img/instagram.svg";

const Footer:React.FC<{ genres:any[] }>  = ({genres}):any => {
   return <footer className="footer">
      <div>
         <h3 className="heading-primary--main footer__text">About</h3>
         <p>Our platform is trusted by millions & features best updated movies all around the world.</p>
         <span className="footer__social--header">Social</span>
         <div className="footer__social">
            <Link to="https://www.linkedin.com/in/michealoluwasegun10/">
               <Instagram/> 
            </Link>
            <Link to="https://www.linkedin.com/in/michealoluwasegun10/">
               <Facebook/>
            </Link>
            <Link to="https://www.linkedin.com/in/michealoluwasegun10/">
               <Twitter/>
            </Link>
            <Link to="https://www.linkedin.com/in/michealoluwasegun10/">
               <LinkedIn/>
            </Link>
         </div>
      </div>
      <div >
         <h3 className="heading-primary--main footer__text">Genres</h3>
         <ul className="footer__list"> {genres.map((child:any) => 
                  <li className="footer__list--item" key={child['id']} >
                     <Link to={''} className="footer__link">{child['name']}</Link>
                  </li>
            )}</ul>
      </div>

      <div>
         <h3 className="heading-primary--main footer__text">Legal</h3>
         <ul>
            <li>
               <Link to={''} className="footer__link">Privacy Policy</Link>
            </li>

            <li>
               <Link to={''} className="footer__link">Terms of Use</Link>
            </li>

            <li>
               <Link to="https://www.linkedin.com/in/michealoluwasegun10/" className="footer__link">Contact us</Link>
            </li>
         </ul>
      </div>
   </footer>
}

export default Footer;


 
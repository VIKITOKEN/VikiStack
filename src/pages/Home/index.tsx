import '@css/home.css';
import Stx from "@img/stx.png";
import Viking from "@img/logo.png";
import Odin from "@img/odin.png";
import StakeCard from './StakeCard';
// import{ ReactComponent as Spinner } from "@img/spinner.svg";

const Home:React.FC  = () => {
   return <main className="home">
      <section className="layout1">
         <h2>Provide Liquidity, Earn FTR</h2>
         <h1>$105,786,890.44</h1>
         <p>Total Value Locked (TVL)</p>
         <form method="post">
            <input type="text" id="" placeholder="Search by token symbol or pool address"/>
            <button type="submit" >Search</button>
         </form>
      </section>

      <section className="layout2">
         <StakeCard>
            <div className="stakeLogo">
               <img src={Stx} alt="" loading="lazy"/>
               <img src={Odin} alt="" loading="lazy" />
            </div>
            <h2>ODIN Stake</h2>
         </StakeCard>

         <StakeCard>
            <div className="stakeLogo">
               <img src={Stx} alt="" loading="lazy"/>
               <img src={Viking} alt="" loading="lazy" />
            </div>
            <h2>Viking Stake</h2>
         </StakeCard>

         
      </section>
   </main>
}
export default Home;
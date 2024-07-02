
const StakeCard:React.FC<{ children:any }>  = ({children}): any  => {
   return <div className="card">
      <div className="cardHeader">
         <button className="btn active">Stake</button>
         <button className="btn">Unstake</button>
      </div>

      <div className="stakeLabel">{ children }</div>

      <div className="stakeAmount">
         <input type="number" placeholder="0.00"/>
         <button>Use Max</button>
      </div>

      <ul className="stakeItem"> 
         <li>
            <span>Total Value Locked (TVL)</span>
            <span>$105,786,890.44</span>
         </li>

         <li>
            <span>Total Stacked</span>
            <span>$105,786,890.44</span>
         </li>

         <li>
            <span>Share Ratio</span>
            <span>$105,786,890.44</span>
         </li>

         <li>
            <span>Viking Fee Pool</span>
            <span>$105,786,890.44</span>
         </li>
      </ul>
      <button className="stakeButton">Stake</button>
   </div>
}

export default StakeCard;
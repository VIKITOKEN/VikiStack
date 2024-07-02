import { Children } from "react";

const MediaHeader:React.FC<{ label:string, dataSelector?:any[] }> = ({label,dataSelector}) => {
   return <div className="media__header">
      <h1 className="heading-secondary--main">{label}</h1>
      {dataSelector && <div className="media__selector heading-secondary--sub">
         { Children.toArray(dataSelector[0].map((selector:any, i:number) =>{
            const [label, url] = selector,
            [selectedApiData, movieDispatch, action] = dataSelector[1];
            return <span className={`media__selector--span ${i==0?'active':''}`} onClick={selectedApiData.bind(this, {movieDispatch, action, url})}>
               {label}
            </span>
         }
      ))} </div>}
   </div>
}
export default MediaHeader;




// selector [[[name,url], [name,url]], [function, useState, action]]
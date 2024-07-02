import { Children } from "react";
import data from "@resources/data.json";
import { Link } from "react-router-dom";
import{ ReactComponent as Arrow } from "@img/arrow.svg";

const imageUrl = [
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][0]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][1]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][2]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][3]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][4]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][5]}`,
   `${data['secureImageUrl']}${data['imageSize']['posterSizes'][6]}`
],

indicatorBtn = (event:any)=>{
   const targetSvg = event.target.closest('svg') as HTMLElement;
   if(!targetSvg) return;

   const silder = targetSvg.parentElement?.firstElementChild as HTMLElement,
   silderScrollState = (targetSvg.classList.contains('svg__left') ? silder['scrollLeft'] - 800 : silder['scrollLeft'] + 800);
   silder.scrollTo({left: silderScrollState , behavior: 'smooth' });
},

Media:React.FC<{ mediaProp:[string,any, boolean] }> = ({mediaProp}) => {

   return <div className="media" onClick={indicatorBtn}>
      <div className={`media__${mediaProp[0]}`} id="silderList">
         { mediaProp[1]['loading']? [...new Array(6)].map((_:any, i:number) => 
            <div className="media__loader"  key={i}></div>)

            : Children.toArray(mediaProp[1]['movie'].map((movie:any)=> {
               const {title, id, poster_path }:any= movie;
               return <Link to={'movie/'+id}> 
                  <figure>
                     <picture>
                        <source media="(max-width: 92px)" srcSet={`${imageUrl[0]}${poster_path}`}/>
                        <source media="(max-width: 154px)" srcSet={`${imageUrl[1]}${poster_path}`}/>
                        <source media="(max-width: 185px)" srcSet={`${imageUrl[2]}${poster_path}`}/>
                        <source media="(max-width: 1710px)" srcSet={`${imageUrl[3]}${poster_path}`}/>
                        <source media="(max-width: 3000px)" srcSet={`${imageUrl[4]}${poster_path}`}/>
                        <source media="(max-width: 5460px)" srcSet={`${imageUrl[5]}${poster_path}`}/>
                        <img src={`${imageUrl[6]}${poster_path}`}  loading="lazy" />
                     </picture>
                     <figcaption>
                        <span className="media__title">{title}</span>
                     </figcaption>
                  </figure>
            </Link>}
         ))}

      </div>
      <Arrow className="svg__left"/> <Arrow className="svg__right"/>
   </div>
}
export default Media;
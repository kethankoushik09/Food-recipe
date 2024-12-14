import { useValue } from "../context/favcontext"
import { NavLink } from "react-router-dom";
export default function Favourites(){
    const {favourites,Setfavourites} = useValue();
    
    console.log(favourites);
    
    return(
        <>
            <h1>favourrites</h1>
            <div className="items-conatiner">
                {favourites.map((item,idx)=>(
                    <div className="item-wrapper" key={idx}>
                        <div className="image-container">
                            <img 
                            src={item.image_url}
                            alt="img"
                            className="food-image"/>
                        </div>
                        <div className="item-content">
                            <span>{item.publisher}</span>
                            <h3>{item.title}</h3>
                            <NavLink to ={`/Product-details/${item.id}`}>
                                <button className="details-btn">Recipe-Details</button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    
    )
}
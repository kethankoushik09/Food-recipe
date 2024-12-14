import { useValue } from "../context/favcontext"
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./style.css"
export default function Item(){
    const {products} = useValue();
    // const {id} = useParams();
    return(
        <>
            {products.map((item,idx)=>(
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
            
        </>
    )
}
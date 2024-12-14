import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useValue } from "../context/favcontext";
export default function Details(){
    const {id} = useParams();
    const{itemdetailsdata,Setitemdetailsdata,handleaddfavourites,checkcontains}=useValue();
    const [loading,Setloading] = useState(false);
    useEffect(()=>{
        async function getRecipeDetials() {
            console.log(loading);
            
            Setloading(true);
            try{
                const response = await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();
                console.log(data);
                Setloading(false);
                Setitemdetailsdata(data.data);
            }
            catch(e){
                // console.log(Err);
                
                console.log(e.message);
                
            }
        }
        getRecipeDetials();

    },[])
    console.log(itemdetailsdata);
    


    if(loading){
        return(<p>please wait.....</p>)
    }
    return(
        <>  
            {itemdetailsdata?
                <div className="details-container">
                    <div className="detailproduct-image">
                        <img src={itemdetailsdata.recipe.image_url} alt="img"/>
                    </div>
                    <div className="details-content">
                        <div className="main-content">
                            <span>{itemdetailsdata.recipe.publisher}</span>
                            <h3>{itemdetailsdata.recipe.title}</h3>
                        </div>
                        <button className="details-btn" onClick={()=>handleaddfavourites(id)}>
                            {checkcontains(id)?"REMOVE FROM FAVORITES":"ADD TO FAVORITES"}
                        </button>
                        <h3>INGREDIENTS :</h3>
                        <ul className="ingredients-list">
                            {itemdetailsdata.recipe.ingredients.map((item,idx)=>(
                                <li key={idx}>{`${item.quantity?item.quantity:""} => ${item.description}`}</li>
                            ))}
                        </ul>   
            
                    </div>
                </div>:
                null
            }
            {/* {itemdetailsdata?<h1>hii</h1>:null} */}
        </>
    )
}

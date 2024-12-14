import { useValue } from "../context/favcontext"
import Item from "./Item";
import "./style.css"

export default function Home(){
    const {error,loading,products} = useValue();
    if(loading){
        return(<p>Loading...............!</p>)
    }
    if(error){
        return(<p>{error}</p>)
    }
    return(
        <>
            {products && products.length?
                <div className="items-conatiner">
                    <Item/>
                </div>:
                <h2 className="note">No products avilable search for products.</h2>
            }
        </>
    )

}
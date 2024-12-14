import { createContext, useContext, useState } from "react";

const Flagcontext = createContext();

export function useValue(){
    return useContext(Flagcontext);
}
export default function Customflagcontext({children}){
    const [search,Setsearch] = useState("");
    const [loading,Setloading] = useState(false);
    const [error,Seterror] = useState(null);
    const [products,Setproducts] = useState([]); 
    const [itemdetailsdata,Setitemdetailsdata] = useState(null);
    const [favourites,Setfavourites] = useState([]);
    async function fetchdata(searchparam) {
        Setloading(true);
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`);
            if(!response.ok){
                throw new Error("Failed to fetch");
            }
            const data = await response.json();
            console.log(data);
            
            Setproducts(data?.data?.recipes);
            console.log(products);
            Setloading(false);
        }
        catch(e){
            Setloading(false);
            Seterror(e.message);
        }
        
    }
    function handleSubmit(event){
        event.preventDefault();
        if(search.trim()){
            fetchdata(search);
        }
    }
    function handleaddfavourites(id){
        const data = products.find((item)=>item.id === id)
        console.log(data);
        const temp = [...favourites]
        if(checkcontains(id)){
            const index = favourites.findIndex((item)=>item.id === id);
            temp.splice(index,1);
        }
        else{
            temp.push(data);
        }
        Setfavourites(temp);
    }
    function checkcontains(id){
        const index = favourites.find((item,idx)=>item.id === id);
        if(index){
            return true;
        }
        return false;
    }
    return(
        <Flagcontext.Provider 
            value={{search,Setsearch,error,loading,handleSubmit,
                    products,itemdetailsdata,Setitemdetailsdata,
                    favourites,Setfavourites,handleaddfavourites,checkcontains}}
        >
            {children}
        </Flagcontext.Provider>
    )
}
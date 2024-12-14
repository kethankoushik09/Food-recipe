import { Outlet ,NavLink} from "react-router-dom";
import "./style.css"
import { useValue } from "../context/favcontext";

function Nav() {
    const {search,Setsearch,handleSubmit} = useValue();
  return (
    <div>
        <nav className="nav-container">
            <div className="project-name">
                <h3>Food-recipe</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                className="food-search" 
                placeholder="Enter the item name"
                value={search}
                onChange={(e)=>Setsearch(e.target.value)}
                />
            </form>
            <ul className="nav-item">
                <NavLink to="/"
                    style={({isActive})=>({
                        color:isActive?"skyblue":"black"
                    })}
                >
                    <li>Home</li>
                </NavLink>
                <NavLink to="fav"
                style={({isActive})=>({
                    color:isActive?"skyblue":"black"
                })}
                >
                    <li>favorites</li>
                </NavLink>
            </ul>
        </nav>
      <Outlet />    
    </div>
  );
}

export default Nav;
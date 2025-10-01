import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Favourites from "./pages/favorites";
import Details from "./pages/details";
import Customflagcontext from "./context/favcontext";

function App() {
  return (
    <Customflagcontext>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="fav" element={<Favourites />} />
            <Route path="Product-details/:id" element={<Details />} />
          </Route>
        </Routes>
      </HashRouter>
    </Customflagcontext>
  );
}

export default App;

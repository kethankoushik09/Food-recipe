import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Favourites from "./pages/favorites";
import Details from "./pages/details";
import Customflagcontext from "./context/favcontext";

function App() {
  const rt = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index:true, element: <Home />},
        { path :"fav", element:<Favourites/> },
        { path:"/Product-details/:id",element:<Details/>}
      ],
    },
  ]);

  return (
    <Customflagcontext>
      <RouterProvider router={rt} 
      // future={{ v7_startTransition: true }}
      future={{
        v7_startTransition: true, // Include the previous flag if needed
        v7_fetcherPersist: true, // Add this to enable the new fetcher behavior
      }}

      />
    </Customflagcontext>
  );
}

export default App;
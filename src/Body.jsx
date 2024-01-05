
import Home from './Home';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Store from './Store';


 const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Home/>,
       
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        }
        ,
        {
          path:"/Store",
          element:<Store/>
        }
      ]);
  return (
    <div>
   
      
        <RouterProvider router={appRouter}/>
   

    </div>
  )
}

export default Body;
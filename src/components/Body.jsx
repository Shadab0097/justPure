
import Home from '../components/Home';
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Store from '../components/Store';
import PrivacyPolicy from './PrivacyPolicy';
import WhyChooseUs from './WhyChooseUs';


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
        ,
        {
          path:"/privacy",
          element:<PrivacyPolicy/>
        }
        ,
        {
          path:"/whychooseus",
          element:<WhyChooseUs/>
        }
      ]);
  return (
    <div>
   
      
        <RouterProvider router={appRouter}/>
   

    </div>
  )
}

export default Body;
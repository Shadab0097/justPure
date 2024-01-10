
import years65 from "../assets/65-years-1.png.webp"
import sold from "../assets/SOLD-1.png.webp"
import japan from "../assets/JAPAN-1.png.webp"
import pioneers from "../assets/Pioneers1.png.webp"
import { useNavigate } from "react-router-dom"
import { useSpring, animated } from 'react-spring';



const ReadMore = () => {
    const navigate = useNavigate()
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }, 
      });
    return (
        <section className=" pt-12 pb-28  bg-white ">
            
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12  items-center justify-between overflow-hidden md:flex sm:flex-col lg:flex-row md:px-8  md:ml-18 ">
          <animated.div style={fadeIn} >
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl md:mb-14">

                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">

                        PROVIDING QUALITY AT PAR EXCELLENCE!
                    </h2>
                    <p>

                        We always source the finest quality products, so as to fulfill the demands of our clients in an effective manner. These manufacturers have the reputation of using only quality raw components while designing security systems. The important reason behind our vital presence in the industry lies in the advantage of our offered networks, which are high in need of its fine quality fabric, colorfastness, elegance, and resistance to shrinkage.

                       JCE pvt.ltd has contributed to making customer’s life better by innovating health and lifestyle-enhancing products, such as electrolytic hydrogen water generators (Alkaline Water Ionizer).

                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <button className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none " onClick={()=>navigate("/about")}>
                            Read More
                        </button>
                       
                    </div>
                </div>
                </animated.div>

                <div className="  mt-14 md:mt-0 md:max-w-xl">
                    <div className="flex-none sm:flex sm:pb-16 ">
                        <div className="flex flex-col items-center">
                            <img
                                src={years65}
                                className=""
                                alt=""
                            />
                            <p className="">8 years of experience,
                                <span className="block pl-10" >Since 2017</span> </p>
                        </div>
                        <div className="flex flex-col items-center sm:pl-32 pl-0 sm:pt-0 sm:pb-0 pt-6 pb-6">
                            <img
                                src={sold}
                                className=""
                                alt=""
                            />
                            <p className="">5,00,000+ Happy Customers <span className="block pl-16" >Globally</span> </p>
                        </div>
                    </div >
                    <div className="flex-none sm:flex">
                        <div className="flex flex-col items-center sm:pt-0 sm:pb-0  pb-6">
                            <img
                                src={japan}
                                className=""
                                alt=""
                            />
                            <p className=""> Best Selling, Made In India</p>
                        </div>
                        <div className="sm:pl-20 pl-0 flex flex-col items-center">
                            <img
                                src={pioneers}
                                className=""
                                alt=""
                            />
                            <p className="">The Only Certified Purity Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReadMore
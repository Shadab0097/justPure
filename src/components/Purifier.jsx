import alkaline from "../assets/Fujiiryoki-Alkaline-Water-2.jpg"
import productLife from "../assets/product_life-2.png"
import impurity from "../assets/Remove_impority.png"
import warranty from "../assets/warranty.webp"




const Purifier = () => {
    return (
        <div className=" bg-[#e6e5e7] sm:bg-transparent flex flex-col items-center sm:flex-none py-10 sm:py-0 ">
             <div className="sm:absolute sm:mt-36 sm:ml-[30px] flex flex-col items-center ">
            <h1 className="sm:text-5xl text-3xl">THE JUST PURE</h1>
              <span className="block"><h1 className="sm:text-5xl text-3xl">  ALKALINE WATER IONIZER</h1></span>
              </div>
            <div className=" sm:absolute  sm:flex sm:mt-80 sm:ml-[30px]  ">

                <img
                    src={impurity}
                    className="sm:w-[170px] sm:h-[170px] sm:py-0 py-8 "
                    alt=""
                />
                <img
                    src={warranty}
                    className="sm:w-[170px] sm:h-[170px] sm:py-0 py-8"
                    alt=""
                />
                <img
                    src={productLife}
                    className="sm:w-[170px] sm:h-[170px] sm:py-0 py-8"
                    alt=""
                />

            </div>
           
            <div className="sm:block hidden ">
                <img
                    src={alkaline}
                    className="sm:h-[570px]  h-[auto] md:object-cover lg:object-fill"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Purifier
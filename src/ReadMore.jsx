
import years65 from "./assets/65-years-1.png.webp"
import sold from "./assets/SOLD-1.png.webp"
import japan from "./assets/JAPAN-1.png.webp"
import pioneers from "./assets/Pioneers1.png.webp"



const ReadMore = () => {
    return (
        <section className=" pt-10 pb-28  bg-white">
            <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex sm:flex-col lg:flex-row md:px-8 sm:w-auto w-[412px] md:ml-18 lg:ml-0">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl md:mb-14">

                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">

                        PROVIDING QUALITY AT PAR EXCELLENCE!
                    </h2>
                    <p>
                        A global leader in lifestyle & Health appliances, since 1954. Fujiiryoki is the pioneer of medical massage chairs & now it become the World’s No#1 brand in Medical massage chairs.
                        Since then, Fuji Medical Instruments Mfg Co. Ltd has contributed to making customer’s life better by innovating health and lifestyle-enhancing products, such as electrolytic hydrogen water generators (Alkaline Water Ionizer).
                        Over 65 Years of experience in the industry. Fujiiryoki has gained trust for its world-class products with Japanese Engineering & Technological innovation.
                        By bringing these standards of excellence to India, we create the opportunity for you to enjoy the same functionality now at your home. We have spent our valuable time and effort into putting our products under
                        the strict Japanese quality testing procedures to ensure that they exceed all performance standards and meet every possible technical parameter.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Read More
                        </a>
                        {/* <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                    Get access
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                </a> */}
                    </div>
                </div>
                <div className="  mt-14 md:mt-0 md:max-w-xl">
                    <div className="flex-none sm:flex sm:pb-16 ">
                        <div className="flex flex-col items-center">
                            <img
                                src={years65}
                                className=""
                                alt=""
                            />
                            <p className="">65 years of experience,
                                <span className="block pl-10" >Since 1954</span> </p>
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
                            <p className=""> Best Selling, Made In Japan</p>
                        </div>
                        <div className="sm:pl-20 pl-0 flex flex-col items-center">
                            <img
                                src={pioneers}
                                className=""
                                alt=""
                            />
                            <p className="">The Only Certified Medical Device</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReadMore
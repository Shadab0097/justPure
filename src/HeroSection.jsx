import HomeSectionImg from "./assets/Home-2nd-section.png"
import CustomerService from "./assets/customer-service.webp"
import Guarantee from "./assets/guarantee.webp"
import Achievements from "./assets/achievement.webp"
import health from "./assets/health-benifts_BG.jpg"
import tap from "./assets/Tap.png"







const HeroSection = () => {

return (
        <>
            <section className=" pt-10 pb-28  bg-[#e6e5e7]">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 200 successful deals
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        INTRODUCING THE HYDROGEN PLUS! ALKALINE WATER IONIZER
                        </h2>
                        <p>
                        THE ELECTROLYTIC HYDROGEN WATER GENERATOR FROM INDIA
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
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={HomeSectionImg}
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-11 px-4 md:px-8 ">
                    <p className="text-center text-sm text-gray-700 font-semibold">Trusted by millions of people</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                       <img src={CustomerService} className="size-20"/>
                       <img src={Guarantee} className="size-20"/>
                       <img src={Achievements} className="size-20"/>
                    </div>
                </div>
            </section>
            <div className="">
                <div className="absolute sm:mt-40 sm:ml-[50rem] z-30 ml-10 mt-20">
                <h1 className="text-white capitalize text-3xl sm:text-4xl sm:w-[300px] w-[300px] ">AVAIL INCREDIBLE BENEFITS</h1>
                <h3 className="text-white">With everyday wellness, at your fingertips</h3>
                </div>
                <div>
                <img src={tap} className="absolute  h-[323px] sm:h-[423px]  object-cover"/>
                </div>
                <div className="">
                <img src={health} className="w-full  h-[323px] sm:h-[423px] object-cover" />
                </div>
            </div>
        </>
    )
}

export default HeroSection
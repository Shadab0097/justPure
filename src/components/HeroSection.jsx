
import kavitajustpure from "../assets/images/kavitajustPure.jpg"
import CustomerService from "../assets/customer-service.webp"
import Guarantee from "../assets/guarantee.webp"
import Achievements from "../assets/achievement.webp"
import { useNavigate } from "react-router-dom"
import health from "../assets/health-benifts_BG.jpg"
import tap from "../assets/Tap.png"
import { useSpring, animated } from 'react-spring';







const HeroSection = () => {
    const navigate = useNavigate()
    const contentAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },

    });

    const imageAnimation = useSpring({
        transform: 'translate3d(0, 0, 0)', 
        from: { transform: 'translate3d(-100%, 0, 0)' }, 
      
    });
    const whyUsAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      });

    return (
        <>
            <section className=" pt-10 pb-28  bg-[#e6e5e7]">
                <animated.div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex sm:flex-col lg:flex-row md:px-8">
                    <animated.div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl " style={contentAnimation}>
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
                            <button className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none " onClick={() => navigate("/about")}>
                                Read More
                            </button>
                        </div>
                    </animated.div>
                    <animated.div className="flex-none mt-14 md:mt-0 md:max-w-xl" style={imageAnimation}>
                        <img
                            src={kavitajustpure}
                            className="md:rounded-tl-[108px]"
                            alt=""
                        />
                    </animated.div>
                </animated.div>
                <div className="mt-11 px-4 md:px-8 ">
                    <p className="text-center text-sm text-gray-700 font-semibold">Trusted by millions of people</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <img src={CustomerService} className="size-20" />
                        <img src={Guarantee} className="size-20" />
                        <img src={Achievements} className="size-20" />
                    </div>
                </div>
            </section>
            <animated.div
          style={whyUsAnimation}
         
        >
            <div className="sm:hidden md:block  ">
                <div className="absolute sm:mt-40 sm:ml-[50rem] z-30  mt-20 md:ml-28 ml-0  ">
                    <h1 className="text-green-100 capitalize text-xl sm:text-4xl sm:w-[300px]  ">AVAIL INCREDIBLE BENEFITS</h1>
                    <h3 className="text-white">With everyday wellness, at your fingertips</h3>
                </div>
                <div>
                    <img src={tap} className="absolute  h-[323px] sm:h-[423px]  object-cover" />
                </div>
                <div className="">
                    <img src={health} className="w-full  h-[323px] sm:h-[423px] object-cover" />
                </div>
            </div>
            </animated.div>
        </>
    )
}

export default HeroSection
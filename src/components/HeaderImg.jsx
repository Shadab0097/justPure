import { useNavigate } from 'react-router-dom'
import home_BG from '../assets/home_BG.webp'
import { useSpring, animated } from 'react-spring';
import VideoCaraousal from '../components/VideoCaraousal'

const HeaderImg = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/store")
  }

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <>
      <div className='overflow-hidden'>

        <div className="relative w-screen h-screen overflow-hidden">

          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={home_BG}
              alt="Background"
            />
          </div>


          <animated.div style={fadeIn} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                ALKALINE WATER IONIZER
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                THE ELECTROLYTIC HYDROGEN WATER GENERATOR FROM INDIA
              </p>
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 font-bold" onClick={handleClick}>
                Explore
              </button>
            </div>
          </animated.div>
        </div>


      </div>
      <div className='w-[100%] overflow-hidden '>
        <p className='inline-block whitespace-nowrap text-red-700 text-[16px] animate-infinite-scroll'>
          Product Waiting Notice: We are updating some important process on our production line. Our Bestselling Model, HWP-77, is currently on a waiting period of 45-60 days from the booking date.
          Our dedicated team is working tirelessly to expedite the process and deliver your product as soon as possible. We sincerely appreciate your patience during this short waiting period. Thank you for choosing us.
        </p>

      </div>
      <VideoCaraousal/>
    </>
  )
}

export default HeaderImg
import { useNavigate } from 'react-router-dom'
import home_BG from './assets/home_BG.webp'

const HeaderImg = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/Contact")
  }
    return (
        <>
        <div>
              {/* <div className='absolute  mt-44 ml-[44rem] text-3xl '>
                <h2>
                    A WholeSome Water Purification Solution
                </h2>
            </div> */}
            <div className="relative w-screen h-screen overflow-hidden">
      {/* Image Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={home_BG}
          alt="Background"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          ALKALINE WATER IONIZER
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
          THE ELECTROLYTIC HYDROGEN WATER GENERATOR FROM INDIA

           Read More
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700" onClick={handleClick}>
            Explore
          </button>
        </div>
      </div>
    </div>

          
        </div>
        <div className='w-[100%] overflow-hidden '>
               <p className='inline-block whitespace-nowrap text-red-700 text-[16px] animate-infinite-scroll'>
               Product Waiting Notice: We are updating some important process on our production line. Our Bestselling Model, HWP-77, is currently on a waiting period of 45-60 days from the booking date.
               Our dedicated team is working tirelessly to expedite the process and deliver your product as soon as possible. We sincerely appreciate your patience during this short waiting period. Thank you for choosing us.
               </p>
             
           </div>
        </>
    )
}

export default HeaderImg
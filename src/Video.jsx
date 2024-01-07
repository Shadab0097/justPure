import hanscon from './assets//images/justPureAlkaline.jpg';






const Video = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row">
        {/* Video Div */}
        <div className="relative w-full md:w-1/2">
          <video
            className="w-full h-auto object-cover opacity-[1]"
            preload="auto"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="https://x7g2n7y5.rocketcdn.me/wp-content/uploads/2023/03/test_your_water_glass.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  w-full h-full bg-[#2d2d2d] opacity-[0.4] sm:pt-[9rem] pt-10 md:pt-[5rem] lg:pt-[9rem] ">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold mb-4">
              <span className="ml-4 md:ml-10">HOW MUCH DO YOU</span>
              <span className="block md:ml-8">REALLY KNOW ABOUT THE WATER</span>
              <span className="">YOU CONSUME?</span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl mb-4">Get Detailed Information</p>
            <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg text-lg md:text-lg lg:text-lg font-bold">
              Contact Us to Know More
            </button>
          </div>
        </div>

        {/* Image Div */}
        <div className="relative w-full md:w-1/2">
          <img
            src={hanscon}
            className="w-full h-full object-cover"
            alt="Image Alt Text"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  w-full h-full bg-[#2d2d2d] opacity-[0.4] sm:pt-[9rem] pt-10 md:pt-[5rem] lg:pt-[9rem]">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold mb-4">
              <span className="ml-4 md:ml-10">GET A HANDS-ON</span>
              <span className="block md:ml-8">EXPERIENCE OF THE</span>
              <span>ALKALINE WATER IONIZER</span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl mb-4">Get Detailed Information</p>
            <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg text-lg md:text-lg lg:text-lg font-bold">
              Visit Our Store!
            </button>
          </div>
        </div>

      </section>
      <div className="hidden md:flex justify-evenly  bg-[#e6e5e7] z-20 py-3 relative">
        <button className="px-7 py-4 text-gray-700 duration-100 border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
          Return & Refund
        </button>
        <button className="px-7 py-4 text-gray-700 duration-100 border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
          Privacy Policy
        </button>
        <button className="px-7 py-4 text-gray-700 duration-100 border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
          Term & Condition
        </button>
        <button className="px-7 py-4 text-gray-700 duration-100 border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
          Store
        </button>
      </div>
    </>
  );
};

export default Video;



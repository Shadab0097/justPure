import hanscon from './assets/handson_experience.jpg';

const Video = () => {
  return (
    <section className="pb-4 bg-[#e6e5e7]">
      <div className="max-w-screen-xl mx-auto text-gray-600 overflow-hidden md:flex flex-col lg:flex-row md:px-8">
        <div className="relative md:w-2/3 lg:w-1/2">
          <div className="mb-6">
            <video
              className="w-full h-auto md:h-96 lg:h-full object-cover"
              preload="auto"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="https://x7g2n7y5.rocketcdn.me/wp-content/uploads/2023/03/test_your_water_glass.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute md:ml-12 lg:ml-0 md:-mt-56 lg:-mt-56 text-white md:text-2xl lg:text-3xl">
            <h1 className="text-white">
              <span className="ml-4 md:ml-10">HOW MUCH DO YOU</span>
              <span className="block md:-ml-8">REALLY KNOW ABOUT THE WATER</span>
              <span className="ml-8 lg:ml-20">YOU CONSUME?</span>
            </h1>
            <p className="text-white ml-4 md:ml-14 text-lg md:text-xl lg:text-2xl">Get Detailed Information</p>
            <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg mt-3 md:mt-5 lg:mt-5 text-lg md:text-xl lg:text-2xl font-bold ml-5 md:ml-12">
              Contact Us to Know More
            </button>
          </div>
        </div>
        <div className="relative md:w-1/3 lg:w-1/2 mt-6 md:mt-0">
          <div className="mb-6">
            <img src={hanscon} className="w-full h-auto object-cover" alt="" />
          </div>
          <div className="absolute md:ml-14 lg:ml-40 -mt-56 md:-mt-56 lg:-mt-56 text-white md:text-2xl lg:text-3xl text-center">
            <h1 className="text-white">
              <span className="ml-4 md:ml-10">GET A HANDS-ON</span>
              <span className="block md:ml-8">EXPERIENCE OF THE</span>
              <span>ALKALINE WATER IONIZER</span>
            </h1>
            <p className="text-white ml-4 md:ml-14 text-lg md:text-xl lg:text-2xl">Get Detailed Information</p>
            <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg mt-3 md:mt-5 lg:mt-5 text-lg md:text-xl lg:text-2xl font-bold ml-12">
              Visit Our Store!
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-evenly mt-3 bg-[#e6e5e7] z-20 pt-3">
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
    </section>
  );
};

export default Video;

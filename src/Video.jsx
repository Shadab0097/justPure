import hanscon from './assets/handson_experience.jpg'

const Video = () => {
    return (
        <section className=" pb-4  bg-[#e6e5e7] ">
            <div className="max-w-screen-xl mx-auto text-gray-600  overflow-hidden md:flex sm:flex-col lg:flex-row md:px-8">
                <div className=''>
                    <video width="1800" height="700" preload="auto" loop autoPlay muted playsInline >
                        <source src="https://x7g2n7y5.rocketcdn.me/wp-content/uploads/2023/03/test_your_water_glass.mp4" type="video/mp4" /></video>

                </div>
                <div className='absolute ml-12 -mt-56 text-2xl sm:mt-44 sm:ml-40 z-20 '>
                    <h1 className='text-white'><span className='ml-10'>HOW MUCH DO YOU </span><span className='block -ml-8'>REALLY KNOW ABOUT THE WATER</span> <span className='ml-20'>YOU CONSUME?</span></h1>
                    <p className='text-white ml-14 text-lg'>Get Detailed Information</p>
                    <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg mt-5 text-xl font-bold ml-5">Contact Us to Lnow More</button>
                </div>
                <div className="flex-none sm:max-w-xl md:max-w-3xl lg:max-w-xl ">
                    <img
                        src={hanscon}
                        className="object-cover"
                        alt=""
                    />

                </div>
                <div className='absolute sm:pl-[600px] ml-14 -mt-56 text-2xl sm:mt-44 sm:ml-40 md:ml-0 md:pl-[200px]  lg:pl-[600px] lg:ml-40 md:mt-[800px] lg:mt-44'>
                    <h1 className='text-white'><span className='ml-10'>GET A HANDS-ON </span><span className='block ml-8'>EXPERIENCE OF THE</span> <span className=''>ALKALINE WATER IONIZER</span></h1>
                    <p className='text-white ml-14 text-lg'>Get Detailed Information</p>
                    <button className="px-5 py-3 text-white duration-100 border-2 border-white rounded-full hover:border-indigo-600 hover:bg-blue-900 active:shadow-lg mt-5 text-xl font-bold ml-12">Visit Our Store!</button>
                </div>
            </div>
            <div className='hidden justify-evenly border-black -mt-2 relative  bg- bg-[#e6e5e7]  z-20 pt-3  sm:flex'>



                <button
                    className="px-7 py-4 text-gray-700 duration-100 border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
                
                   Return & Refund
                </button>
                <button
                    className="px-7 py-4 text-gray-700 duration-100  border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
                
                Privacy Policy
                </button>

                <button
                    className="px-7 py-4 text-gray-700 duration-100  border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
                
                    Term & condition
                </button>
                <button
                    className="px-7  text-gray-700 duration-100  border-2 border-black rounded-full hover:border-indigo-600 active:shadow-lg">
                
                    Store
                </button>


            </div>
        </section>
    )
}

export default Video
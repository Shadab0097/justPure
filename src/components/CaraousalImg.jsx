// import img4 from '../assets/images/victorRoys.jpg';

import img1 from '../assets/images/justpure1.png';

import img2 from '../assets/images/justpure2.png';
import img3 from '../assets/images/justpure3.png';
import img5 from '../assets/images/justpure4.png';

// import img10 from '../assets/images/healthWealth.jpg';





const Carousel = () => {

  const images = [img1, img2, img3, img5];

  const handleLeft = () => {
    let scroller = document.getElementById('title');
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const handleRight = () => {
    let scroller = document.getElementById('title');
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };


  return (
    <div>
      <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mt-14 sm:mt-20 sm:text-5xl'>
        JUST PURE ALKALINE WATER IONIZER
      </h1>
      <div className='  overflow-x-hidden relative  '>
        <h2 className='text-2xl mt-1 md:mt-5 font-medium py-3 text-white'>title</h2>
        <div className='  absolute  flex justify-between mt-48 w-[1020px] ml-0 md:ml-80 md:w-[600px]'>
          <button className='hidden md:hidden lg:inline-block  pr-4 text-white' onClick={handleLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>

          </button>
          <button className=' hidden md:hidden lg:inline-block pr-4  text-white ' onClick={handleRight}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </button>
        </div>
        <div id='title' className='flex overflow-x-scroll no-scrollbar scroll-smooth '>

          <div className="flex  ">

            {images.map((image, index) => {

              return <img src={image} key={index} alt="" className='w-[500px] h-[350px] mt-2 ml-4 mr-4 mb-10 object-cover rounded-3xl' />

            })}

          </div>
        </div>

      </div>

    </div>
  );
};

export default Carousel;

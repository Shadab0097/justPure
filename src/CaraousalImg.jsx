
// import img1 from './assets/Ageing-Chain-1.jpg';
import img1 from './assets/images/antiOxidant.jpg';



import img2 from './assets/images/food.jpg';
import img3 from './assets/images/mistuenergyWater.jpg';

import img4 from './assets/images/victorRoys.jpg';
import img5 from './assets/images/water72.jpg';
import img6 from './assets/images/waterBenefit.jpg';


const Carousel = () => {
  //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];



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
        <div id='title' className='flex overflow-x-scroll no-scrollbar scroll-smooth'>

          <div className="flex ">

            {images.map((image, index) => {

              return <img src={image} key={index} alt="" className='w-[532px] h-[450px] mt-6 ml-4 mr-4 mb-10 ' />

            })}

          </div>
        </div>

      </div>

    </div>
  );
};

export default Carousel;

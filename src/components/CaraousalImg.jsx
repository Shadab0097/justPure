import img1 from '../assets/images/antiOxidant.jpg';
import img2 from '../assets/images/food.jpg';
import img3 from '../assets/images/mistuenergyWater.jpg';
import img4 from '../assets/images/victorRoys.jpg';
import img5 from '../assets/images/water72.jpg';
import img6 from '../assets/images/waterBenefit.jpg';
import img7 from '../assets/images/alkanization.jpg';
import img8 from '../assets/images/doctorOtto.jpg';
import img9 from '../assets/images/healthbenefitjp.jpg';
import img10 from '../assets/images/healthWealth.jpg';
import img11 from '../assets/images/jalhijiwan.jpg';
import img12 from '../assets/images/microClustring.jpg';
import img13 from '../assets/images/orp.jpg';
import img14 from '../assets/images/whenweTalked.jpg';




const Carousel = () => {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

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
      <h1 className='flex break-words justify-center mt-14 sm:text-4xl text-xl font-bold'>WHY USE ALKALINE WATER IONIZER</h1>
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
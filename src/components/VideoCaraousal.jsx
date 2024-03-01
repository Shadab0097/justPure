// import img4 from '../assets/images/victorRoys.jpg';

// import img1 from '../assets/images/justpure1.png';

// import img2 from '../assets/images/justpure2.png';
// import img3 from '../assets/images/justpure3.png';
// import img5 from '../assets/images/justpure4.png';

// import img10 from '../assets/images/healthWealth.jpg';





const VideoCarousal = () => {

    const videos = [
        "https://www.youtube.com/embed/maIIziN6HvI?si=ygdXtUa2yTHcOtuT",
        "https://www.youtube.com/embed/afuQl98bko4?si=nKKytrpLn1pvMiqK",
        "https://www.youtube.com/embed/afuQl98bko4?si=YnbKOtcG9S9BD_iq",
        "https://www.youtube.com/embed/mackPJDW0PI?si=wsZUyHJaoj8OqIeA",
        "https://www.youtube.com/embed/lFbXk5yPJg8?si=Mkrukb17gJ5FDSh1",
        "https://www.youtube.com/embed/lFbXk5yPJg8?si=keuEwia5Us-CpG0W",
        "https://www.youtube.com/embed/MG8VyPlI8PM?si=CTFuGGTk0dlC5_b7",

      ];

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
      <h1 className='flex break-words justify-center mt-14 sm:text-4xl text-xl font-bold'> WHY JUST PURE ALKALINE WATER IONIZER</h1>
      <div className='  overflow-x-hidden relative  '>
        <h2 className='text-2xl mt-1 md:mt-5 font-medium py-3 text-white'>title</h2>
        <div className='  absolute  flex justify-between mt-40 w-[1020px] ml-0 md:ml-80 md:w-[600px]'>
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

          <div className="flex -mt-8 ">

          {videos.map((video, index) => (
              <iframe
                key={index}
                width="560"
                height="315"
                src={video}
                title={`Video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className='w-[500px] h-[350px] mt-2 ml-4 mr-4 mb-10 rounded-3xl'
              ></iframe>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
};

export default VideoCarousal;

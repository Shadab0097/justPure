import home_BG from './assets/home_BG.webp'

const HeaderImg = () => {
    return (
        <>
        <div>
              {/* <div className='absolute  mt-44 ml-[44rem] text-3xl '>
                <h2>
                    A WholeSome Water Purification Solution
                </h2>
            </div> */}
            <div className="">
            <img
                className="h-auto w-[100vw]"
                src={home_BG}
                alt="Your Company"
            />
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
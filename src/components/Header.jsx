import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import justpureLogo from '../assets/images/justPure-logo.png'

export default  function Navbar () {

  const [state, setState] = useState(false)

  const navigate = useNavigate()

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  let navbarClasses = [
    "navbar",
    "fixed",
    "top-0",
    "w-full",
    "transition-all",
    "duration-300",
    "z-50",
    "md:border-0"
    
  ];
  if (isScrolled) {
    navbarClasses.push("bg-white");
  }

  return (
      <nav id="navbar" className={`${navbarClasses.join(" ")}  ${state ? 'bg-white' : ''} ${isScrolled || state ? 'text-black' : 'text-white'} `}>
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 h-auto">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <img
                            src={justpureLogo} 
                            width={100} 
                            height={40}
                            alt="Just Pure logo"
                        />
                        {/* <h1>just pure</h1> */}
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'} `}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold text-xl ">
                  <Link to="/" className="hover:text-blue-500 hover:underline">
        <li className="transition duration-300 ease-in-out transform hover:scale-105">Home</li>
      </Link>
      <Link to="/store" className="hover:text-blue-500 hover:underline">
        <li className="transition duration-300 ease-in-out transform hover:scale-105">Store</li>
      </Link>
      <Link to="/about" className="hover:text-blue-500 hover:underline">
        <li className="transition duration-300 ease-in-out transform hover:scale-105">About Us</li>
      </Link>
      <Link to="/contact" className="hover:text-blue-500 hover:underline">
        <li className="transition duration-300 ease-in-out transform hover:scale-105">Contact Us</li>
      </Link>

                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <button className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow" onClick={()=>navigate("/store")}>
                    Get Started
                </button>
              </div>
          </div>
      </nav>
  )
}
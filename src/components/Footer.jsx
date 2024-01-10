import { Link } from 'react-router-dom'
import justpureLogo from '../assets/images/justPure-logo.png'
import { SocialIcon } from 'react-social-icons'
 
 
 const Footer = () => {

 
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <img src={justpureLogo} className="w-32" />
                        {/* <h1>Just Pure</h1> */}
                        <div >
                        <p className="max-w-md font-bold text-2xl">
                           Stay Connected
                        </p>
                        <ul className='flex mt-3 '>
                            <li className='' ><SocialIcon url="https://www.youtube.com/channel/UC6Zcug3FiO8VwLSg3x-qm0A" target="_blank" /></li>
                            <li className='ml-4 mr-4'><SocialIcon url="https://www.instagram.com/justpurerohtak?igsh=MXd5ejV4Mnl2NzB4ag==" target="_blank"/></li>
                            <li><SocialIcon url="https://www.threads.net/@justpurerohtak" target="_blank" /></li>

                        </ul>
                        </div>
                        <ul className="flex flex-wrap items-center gap-4  sm:text-base text-2xl font-bold">
                          <li>Terms</li>
                          <li>License</li>
                          <li>Privacy</li>
                        <Link to="/about"> <li>About Us</li></Link> 

                        </ul>
                    </div>
                  
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2023 Just Pure pvt ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
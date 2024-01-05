 const Footer = () => {

 
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        {/* <img src="https://www.floatui.com/logo.svg" className="w-32" /> */}
                        <h1>Just Pure</h1>
                        <p className="max-w-md">
                           Stay Connected
                        </p>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                          <li>Terms</li>
                          <li>License</li>
                          <li>Privacy</li>
                          <li>About Us</li>

                        </ul>
                    </div>
                  
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2022 Just Pure pvt ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
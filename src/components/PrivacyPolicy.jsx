import Header from '../components/Header'
import Footer from '../components/Footer'


const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl mx-auto mt-8 p-4">
                <h1 className="text-3xl font-extrabold mb-4">Privacy Policy</h1>

                <p className="text-gray-700 mb-4">
                    At Just Pure, we are committed to maintaining the privacy and security of your personal information.
                    This Privacy Policy outlines how we collect, use, and protect your data.
                </p>

                <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                    We collect various types of information when you use our services, including but not limited to:
                    your name, email address, contact details, and usage data.
                </p>

                <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>

                <h2 className="text-2xl font-bold mb-2">Data Security</h2>
                <p className="text-gray-700 mb-4">
                    We prioritize the security of your personal information and follow industry best practices to protect it.
                    However, no method of transmission over the internet or electronic storage is 100% secure,
                    and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mb-2">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page.
                </p>

         
              
                {/* <div className="lg:flex lg:space-x-8">
                    <div className="lg:w-1/2">
                        <img
                            src="https://via.placeholder.com/800x600"
                            alt="Privacy Illustration"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
                            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                       
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;

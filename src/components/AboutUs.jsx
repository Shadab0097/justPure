import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
  const addressAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const whyUsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
  return (

    <>
      <Header />
      <div>
      <animated.div
          style={addressAnimation}
         
        >
        <div className="py-16 bg-white mt-20">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">PROVIDING QUALITY AT PAR EXCELLENCE!</h2>
                <p className="mt-6 text-gray-600">Established in the year 2017, we, Justcall Electra Private Limited is a distinguished as manufacturing of LED Panel Light, LED Bulb, LED Floodlight, LED Tube Light, LED Street Light, etc. For proper security solutions, we have been undertaking turnkey projects while keeping in mind the budgetary constraints of our clients. Moreover, these systems considerably reduce the operational costs of an organization and increase the productivity of the workforce.

                  We always source the finest quality products, so as to fulfill the demands of our clients in an effective manner. These manufacturers have the reputation of using only quality raw components while designing security systems. The important reason behind our vital presence in the industry lies in the advantage of our offered networks, which are high in need of its fine quality fabric, colorfastness, elegance, and resistance to shrinkage.

                  Under the able and efficient guidance of our mentor, “Mr. Sanjay Dalal”, who has rich experience in this field, we have established a strong foothold in the market. We understand his accomplished guidance that supports us to establish our brand competence.</p>
                <p className="mt-4 text-gray-600">  Justcall Electra Private Limited has gained trust for its world-class products with smart Engineering & Technological innovation.</p>
              </div>
            </div>
          </div>
        </div>
        </animated.div>
      </div>
      
      <div className="flex flex-col md:flex-row mt-10 ">
        <animated.div
          style={addressAnimation}
          className="mx-4 mb-8 md:mb-0 md:mr-8 md:w-1/2"
        >
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold border-b-2">Address</h1>
          </div>
          <p className="text-lg">JC Tower, Near Sukhpura Chowk, Hissar Road

            Rohtak Sukhpura Chowk

            JC Tower

            Hissar Road

            Rohtak - 124001

            Haryana, India.</p>
        </animated.div>

        <animated.div
          style={whyUsAnimation}
          className="mx-4 md:w-1/2"
        >
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold border-b-2">Why Us</h1>
          </div>
          <p className="text-lg">Since our commencement, we have been indulged in providing top quality products to our clients and ensure their utmost satisfaction.

            Following features have assisted us in gaining wide appreciation from the clients:

            Best quality products

            Rich vendor base

            Large distribution network

            Prompt delivery

            Ethical business policies.</p>
        </animated.div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
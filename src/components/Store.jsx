import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSpring, animated } from 'react-spring';
import storeImg from '../assets/images/storeImg.png'
import { useState } from "react"



const Store = () => {
  const [readMore, setReadMore] = useState()

  const addressAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
  return (
    <>
      <Header />
      <div className='mt-40'>

        <div>
          <animated.div
            style={addressAnimation}

          >
            <div className="py-16 bg-white mt-20">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                    <img src={storeImg} alt="image" loading="lazy" width="" height="" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl"> INTRODUCING JUST PURE WATER IONIZER</h2>
                    <p className="mt-6 text-gray-600">We are thrilled to announce the official launch of the Just Pure Water Ionizer, a groundbreaking addition to your pursuit of holistic well-being. Elevate your hydration experience and redefine the way you consume water with this state-of-the-art ionizer.


                      We always source the finest quality products, so as to fulfill the demands of our clients in an effective manner. These manufacturers have the reputation of using only quality raw components while designing security systems. The important reason behind our vital presence in the industry lies in the advantage of our offered networks, which are high in need of its fine quality fabric, colorfastness, elegance, and resistance to shrinkage.

                      Under the able and efficient guidance of our mentor, “Mr. Sanjay Dalal”, who has rich experience in this field, we have established a strong foothold in the market. We understand his accomplished guidance that supports us to establish our brand competence.</p>
                    <p className="mt-4 text-gray-600">  Revitalize your hydration routine with the Just Pure Water Ionizer – where innovation meets purity for a healthier you. Order now and embark on a journey to optimal well-being.</p>
                   
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                      <button className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none mt-4" onClick={() => setReadMore(!readMore)}>
                        Read More
                      </button>
                    </div>
                   
                    <div className={`mt-4 overflow-hidden transition-transform transform ${readMore ? 'scale-y-100' : 'scale-y-0'
                      } ${readMore ? 'h-auto' : 'h-0'}`}>
                      <p className='mb-3'>
                        We are thrilled to announce the official launch of the Just Pure Water Ionizer, a groundbreaking addition to your pursuit of holistic well-being. Elevate your hydration experience and redefine the way you consume water with this state-of-the-art ionizer.

                      </p>
                      <p>
                        <span className="font-bold ">Health Benefits Unveiled</span> Immerse yourself in the myriad health benefits associated with our water ionizer. From potential antioxidant effects to enhanced cellular hydration, our product aims to be your ally in achieving a healthier lifestyle.

                      </p>
                      <p>
                        <span className="font-bold"> Revolutionary Technology</span>  Explore the cutting-edge technology behind the Just Pure Water Ionizer. Our ionization process optimally adjusts pH levels, transforming ordinary tap water into a refreshing elixir that may contribute to improved overall health.

                      </p>
                      <p>
                        <span className="font-bold">  Testimonials and Success Stories</span> Join a community of enthusiasts who have experienced transformative effects. Discover testimonials and success stories from individuals who have embraced the Just Pure Water Ionizer, sharing their journeys to improved vitality.

                      </p>
                      <p>
                        <span className="font-bold"> Educational Resources</span> Navigate the world of water ionization with confidence. Our website provides educational resources, articles, and guides to empower you with knowledge about the science and benefits of alkaline water.

                      </p>
                      <p>
                        <span className="font-bold">Exclusive Launch Offers</span> Celebrate our product launch with exclusive offers and promotions. Avail yourself of special pricing, bundled packages, and limited-time incentives to make the Just Pure Water Ionizer an irresistible addition to your home.

                      </p>
                      <p>

                        <span className="font-bold"> Connect with Us</span> Stay connected with our community through social media channels. Engage in conversations, share your experiences, and be part of a growing network of individuals committed to prioritizing their health through advanced hydration.

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">The Launch Experience</h1>
      <p className="text-gray-700">
        <span className="font-bold">Unveiling Ceremony:</span> Witness the
        official unveiling of the Just Pure Water Ionizer through our launch
        ceremony. Immerse yourself in the excitement and anticipation
        surrounding this revolutionary product.
      </p>
      <p className="text-gray-700 mt-4">
        <span className="font-bold">Global Reach:</span> Our launch extends
        beyond borders. Experience the global impact as individuals worldwide
        embrace the Just Pure Water Ionizer, uniting in a shared commitment to
        health and wellness.
      </p>
      <p className="text-gray-700 mt-4">
        <span className="font-bold">Partnerships and Collaborations:</span>
        Explore potential partnerships and collaborations. As we launch our
        product, we seek like-minded entities and influencers who share our
        passion for promoting health and sustainable living.
      </p>
      <p className="text-gray-700 mt-4">
        Join us in celebrating the launch of the Just Pure Water Ionizer – a
        beacon of innovation and wellness. Order now and be part of a movement
        dedicated to transforming ordinary water into extraordinary hydration
        for a healthier, more vibrant you.
      </p>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Store
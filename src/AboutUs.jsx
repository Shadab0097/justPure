import Header from './Header'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
     <Header/>
     <div>
    
<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">PROVIDING QUALITY AT PAR EXCELLENCE!</h2>
          <p className="mt-6 text-gray-600">A global leader in lifestyle & Health appliances, since 1954. Fujiiryoki is the pioneer of medical massage chairs & now it become the World’s No#1 brand in Medical massage chairs.
Since then, Fuji Medical Instruments Mfg Co. Ltd has contributed to making customer’s life better by innovating health and lifestyle-enhancing products, such as electrolytic hydrogen water generators (Alkaline Water Ionizer).
Over 65 Years of experience in the industry. Fujiiryoki has gained trust for its world-class products with Japanese Engineering & Technological innovation.
By bringing these standards of excellence to India, we create the opportunity for you to enjoy the same functionality now at your home. We have spent our valuable time and effort into putting our products under
the strict Japanese quality testing procedures to ensure that they exceed all performance standards and meet every possible technical parameter.</p>
          <p className="mt-4 text-gray-600">  Fujiiryoki has gained trust for its world-class products with Japanese Engineering & Technological innovation.</p>
        </div>
      </div>
  </div>
</div>
      </div>
      <Footer/>
      </>
  )
}

export default AboutUs
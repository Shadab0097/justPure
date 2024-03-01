import Header from '../components/Header'
import Footer from '../components/Footer'

const WhyChooseUs = () => {
  return (
  <>
 <Header />
    <div className="bg-gray-100 pb-12 pt-32 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose JustPure Alkaline Water Ionizer Machine?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

const reasons = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Our ionizer machine utilizes advanced technology to produce high-quality alkaline ionized water, ensuring superior performance and reliability.',
  },
  {
    title: 'Health Benefits',
    description: 'Enjoy the numerous health benefits associated with drinking alkaline ionized water, including improved hydration, better digestion, and enhanced detoxification.',
  },
  {
    title: 'Customizable Settings',
    description: 'With adjustable pH levels and various filtration options, you can customize your water to suit your preferences and health goals.',
  },
  {
    title: 'Easy Installation and Maintenance',
    description: 'Our ionizer machine is designed for easy installation and minimal maintenance, allowing you to enjoy hassle-free operation and convenience.',
  },
  {
    title: 'Space-Saving Design',
    description: 'The compact and sleek design of our ionizer machine makes it suitable for any kitchen countertop or space-conscious environment, without compromising on functionality.',
  },
  {
    title: 'Eco-Friendly',
    description: "By switching to alkaline ionized water, you're reducing your environmental impact by eliminating the need for single-use plastic bottles, contributing to a healthier planet.",
  },
  {
    title: 'Trusted Brand',
    description: 'JustPure is a trusted brand known for its commitment to quality and customer satisfaction, providing peace of mind with every purchase.',
  },
  {
    title: 'Comprehensive Warranty',
    description: 'Rest assured knowing that your investment is protected by a comprehensive warranty, ensuring long-term peace of mind and satisfaction.',
  },
  {
    title: 'Positive Feedback',
    description: 'Our ionizer machine has received positive feedback and testimonials from satisfied customers who have experienced the benefits firsthand, further validating its effectiveness and reliability.',
  },
  {
    title: 'Dedicated Support',
    description: 'Our team of dedicated customer support representatives is available to assist you with any questions or concerns, ensuring a smooth and satisfactory experience throughout your ownership of the JustPure Alkaline Water Ionizer Machine.',
  },
];

export default WhyChooseUs;

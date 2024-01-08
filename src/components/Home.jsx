import HeaderImg from '../components/HeaderImg'
import HeroSection from '../components/HeroSection'
import Carousel from '../components/CaraousalImg'
import ReadMore from '../components/ReadMore'
import Video from '../components/Video'
import Purifier from '../components/Purifier'
import Header from '../components/Header'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
        <Header/>
      <HeaderImg/>
       <HeroSection/>
       <Carousel/>
       <ReadMore/>
       <Purifier/>
       <Video/>
       <Footer/>

    </div>
  )
}

export default Home;
import HeaderImg from './HeaderImg'
import HeroSection from './HeroSection'
import Carousel from './CaraousalImg'
import ReadMore from './ReadMore'
import Video from './Video'
import Purifier from './Purifier'
import Header from './Header'
import Footer from './Footer'



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
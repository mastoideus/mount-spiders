import React from 'react' 
import './Home.css'
import FirstSection from './sections/FirstSection'
import SecondSection from './sections/SecondSection/SecondSection'
import ThirdSection from './sections/ThirdSection/ThirdSection'
import FourtSection from './sections/FourtSection/FourtSection'
import Gallery from './sections/GallerySection/Gallery'
import UnderGallery from './sections/UnderGallery/UnderGallery'
import ContactSection from './sections/ContactSection/ContactSection'
import Footer from './sections/Footer/Footer'
import Header from '../../components/Header/Header'


const Home=()=>{
    return (
<React.Fragment>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourtSection/>
      <Gallery/>
      <UnderGallery/>
      <ContactSection/>
      <Footer/>
</React.Fragment>
    )
}

export default Home
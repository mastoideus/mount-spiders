import React, {useEffect} from 'react' 
import './FirstSection.css'
import Button from '../../../components/Button'
import groupPic from '../../../assets/images/Groupclimb.jpeg'
import 'aos/dist/aos.css'
import Aos from 'aos'

const FirstSection=(props)=>{
    
    useEffect(()=>{
      Aos.init({duration:1300})
    },[])


    return (
        <div className='firstSection'>
           <div data-aos='fade-up' className='firstSection__info'>
             <h4 className='firstSection__question' >WHO WE ARE</h4>
             <h2>EXPERIENCE A HIGHER DIMENSION</h2>
             <p>We are a team of enthusiastic climbers exploring the most<br/>beautiful peaks of Giant Nature.Follow us safely to the top.</p>
             <Button>OUR STORY</Button>
           </div>
           <div data-aos='fade-up'>
              <img className='firstSection__image'src={groupPic} alt='' />
           </div>
        </div>
    )
}


export default FirstSection
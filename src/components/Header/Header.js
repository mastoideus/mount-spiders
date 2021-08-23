import React, {useEffect} from 'react' 
import './Header.css'
import Navbar from './Navbar'
import {CgMouse} from 'react-icons/cg'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Button from '../Button'


const Header=(props)=>{


     useEffect(()=>{
         Aos.init({duration:1000})
     },[])

    return (
        <header className='header'>
           <div className='header__container'>
           <Navbar/>
           <div style={{paddingTop:'200px'}} data-aos='fade-up'>
               <h1 className='header__title'>MOUNT SPIDERS</h1>
               <p>We climb with passion and survive with precision</p>
               <Button>SEE MORE</Button>
           </div>
           <CgMouse style={{fontSize:'30px', marginTop:'200px'}}/>
           </div>
        </header>
    )
}


export default Header 
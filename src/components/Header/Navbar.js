import React, {useEffect, useState} from 'react' 
import './Navbar.css'
import spiderLogo from '../../assets/images/spider.jpeg'
import Modal from '../Modal'



const Navbar=(props)=>{
    const [showNavBackground, setShowNavBackground]=useState(false)
    const [showModal, setShowModal]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>200){
               setShowNavBackground(true)
            } else {
                setShowNavBackground(false)
            }
        })
    })
    
    const showModalHandler=()=>{
        setShowModal(true)
    }

    const closeModalHandler=()=>{
        setShowModal(false)
    }


    
    return (
        <React.Fragment>
        <Modal show={showModal}  onClose={closeModalHandler}/>
        <div className={`navbar ${showNavBackground ? 'showNav':null}`}>
           <img className='image' src={spiderLogo} alt='' />
           <button className='navbar__burger' onClick={showModalHandler}>
              <span></span>
              <span></span>
              <span></span>
           </button>
        </div>
        </React.Fragment>
    )
}


export default Navbar 
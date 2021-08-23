import React from 'react' 
import './Modal.css' 
import spiderIcon from '../assets/images/spider.jpeg'
import {CgCloseO} from 'react-icons/cg'



const Modal=(props)=>{
    
    
     return (
        <div className={props.show?'modal1 open1':'modal1'}>
           <div className='closeIcon'>
            <CgCloseO style={{fontSize:'30px'}} onClick={props.onClose}/>
           </div>
           <img style={{width:'170px'}} src={spiderIcon} alt='' />
           <h1>HOME</h1>
           <h1>ABOUT</h1>
           <h1>MEMBERSHIP</h1>
           <h1>GALLERY</h1>
           <h1>CONTACT</h1>
        </div>
    )
}

export default Modal 
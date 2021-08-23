import React from 'react' 
import './ContactSection.css' 
import spiderPic from '../../assets/images/spider.jpeg'


const ContactSection=props=>{
    return (
        <div className='contactSection'>
          <div className='contactSection__container'>
             <div className='contactSection__content'>
             <img src={spiderPic} style={{width:'70px', borderRadius:'50%'}} alt=''/>
             <h2 className='contactSection__title' style={{color:'var(--primary-color)'}}>STAY UPDATED WITH DEALS</h2>
             <div className='contactSection__input'>
             <input type='email' placeholder='Email Address'/>
             <button>SUBMIT</button>
             </div>
             </div>
          </div>
        </div>
    )
}


export default ContactSection 
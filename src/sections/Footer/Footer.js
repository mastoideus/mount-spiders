import React from 'react' 
import './Footer.css'
import {GrFacebook, GrTwitter,GrInstagram,GrYoutube} from 'react-icons/gr'




const Footer=(props)=>{
    return (
        <div className='footer'>
           <h3>Home</h3>
           <h3>About</h3>
           <h3>Membership</h3>
           <h3>Gallery</h3>
           <h3>Contact</h3>
           <div className='footer__icons '>
            <GrFacebook style={{fontSize:'20px'}}/>
            <GrInstagram style={{fontSize:'20px'}}/>
            <GrYoutube style={{fontSize:'20px'}}/>
            <GrTwitter style={{fontSize:'20px'}}/>
           </div>
        </div>
    )
}

export default Footer 
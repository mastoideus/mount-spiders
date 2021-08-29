import React from 'react'
import './Comment.css'
import {FaQuoteRight} from 'react-icons/fa'


const Comment=({name, text, id})=>{
    return (
       
        <div className='comment'>
           
             <FaQuoteRight style={{fontSize:'350px',color:'yellow'}}/>
          
           
           <div className='comment__right'>
               <p className='comment__text'>{text}</p>
               <h3 className='comment__name'>{name}</h3>
           </div>
        </div>
       
        
    )
}

export default Comment
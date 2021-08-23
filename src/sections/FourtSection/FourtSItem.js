import React from 'react' 
import './FourtSItem.css'


const FourtSItem=({id,name,image,icon,text,job})=>{
    return (
       <div className='fourtSItem'
        style={{
            backgroundImage:`url(${image})`,
            backgroundPosition:'center center',
            backgroundSize:'cover',
            objectFit:'contain',
            
        }}
       >
       <div className='fourtSItem__container'>
          <p style={{color:'yellow',fontSize:'30px'}}>{icon}</p>
          <p className='fourtSItem__text'>{text}</p>
          <div className='fourtSItem__name'>
          <h4>{name}</h4>
          <h5>{job}</h5>
          </div>
       </div>
       </div>
    )
}


export default FourtSItem 
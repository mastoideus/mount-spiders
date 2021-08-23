import React from 'react' 
import './ThirdSItem.css' 


const ThirdSItem=({id,title,description,icon})=>{
    return (
        <div className='thirdSItem'>
           <p className='thirdSItem__icon'>{icon}</p>
           <h4 className='thirdSItem__title'>{title}</h4>
           <p className='thirdSItem__desc'>{description}</p>
        </div>
    )
}


export default ThirdSItem
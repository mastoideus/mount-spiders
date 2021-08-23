import React,{useEffect} from 'react' 
import './Item.css' 
import Button from '../../components/Button'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Item=({id,title,description,image,btn})=>{
       useEffect(()=>{
        Aos.init({duration:1500})
    })
   
    
    
    
    
    return (
        <div 
        
        style={{
            backgroundPosition:'center center',
            backgroundSize:'cover',
            backgroundImage:`url(${image})`,
            objectFit:'contain',
            
        }}
        className='item'>
        <div  className='item__container'>
           <div data-aos='fade-up' >
           <h2>{title}</h2>
           <p>{description}</p>
           <Button>{btn}</Button>
           </div>
        </div>
        </div>
    )
}


export default Item 
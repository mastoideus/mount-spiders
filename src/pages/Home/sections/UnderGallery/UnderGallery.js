import React from 'react' 
import './UnderGallery.css' 
import cityPic from '../../../../assets/images/city.png'
import {GoLocation} from 'react-icons/go'



const UnderGallery=props=>{
    return (
        <div className='underGallery'
        style={{
            backgroundPosition:'center center',
            backgroundSize:'cover',
            backgroundImage:`url(${cityPic})`,
            objectFit:'contain',
            width:'100%',
            height:'300px',
            position:'relative'
           
        }}
        >
        <div className='underGallery__container'>
            <div className='underGallery__infoContainer'>
                <h3>FIND US</h3>
                <h1>OUR ADDRESS</h1>
                <div className='info'>
                    <GoLocation style={{fontSize:'25px'}}/>
                    <div className='location'>
                        <p>The Big Lebowski Road</p>
                        <p>Dude</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default UnderGallery 
import React, {useState, useEffect} from 'react' 
import './Gallery.css' 
import image1 from '../../../../assets/images/image1.jpeg'
import image2 from '../../../../assets/images/image2.jpeg'
import image3 from '../../../../assets/images/image3.jpeg'
import image4 from '../../../../assets/images/image4.jpeg'
import image7 from '../../../../assets/images/image7.jpeg'
import image8 from '../../../../assets/images/image8.jpeg'
import image9 from '../../../../assets/images/image9.jpeg'
import image10 from '../../../../assets/images/image10.jpeg'
import {CgCloseO} from 'react-icons/cg'
import 'aos/dist/aos.css'
import Aos from 'aos'

const galleryData=[
    {id:'i1', imgSrc:image1},
     {id:'i2', imgSrc:image2},
      {id:'i3',imgSrc:image3},
       {id:'i4', imgSrc:image4},
        
        
          {id:'i7', imgSrc:image7},
           {id:'i8', imgSrc:image8},
           {id:'i9', imgSrc:image9},
           {id:'i10', imgSrc:image10}

]



const Gallery=props=>{
    const [modal, setModal]=useState(false)
    const [imgSrc, setImgSrc]=useState('')
    

    useEffect(()=>{
        Aos.init({duration:1500})
    })


    const getImage=(imgSrc)=>{

        setImgSrc(imgSrc)
        setModal(true)

    }

    const closeModal=()=>{
        setModal(false)
    }
    
    
    
    return (
        <React.Fragment>
        <div className={modal?'modal open':'modal'}>
          <img className='openImage' src={imgSrc} alt=''/>
          
           <div className='closeIcon'>
          <CgCloseO style={{fontSize:'30px'}} onClick={closeModal}/>
          </div>
          
        </div>
        <div style={{backgroundColor:'black'}}>
         <div data-aos='fade-up'>
        <div style={{backgroundColor:'black', paddingTop:'70px'}}>
         <h3 style={{color:'var(--secondary-color)', textAlign:'center'}}>Our</h3>
         <h1 style={{color:'var(--primary-color)', textAlign:'center'}}>Shots</h1>
         </div>
         
        <div className='gallery'>
            
           {galleryData.map((item,index)=>{
              return (
                 
                  <div className='pics' key={index}>
                      <img  className='pic'style={{width:'100%'}} src={item.imgSrc} alt='' onClick={()=>getImage(item.imgSrc)}/>
                  </div>
                 
              )
           })}
        </div>
        </div>
        </div>
     
        </React.Fragment>
    )
}

export default Gallery 
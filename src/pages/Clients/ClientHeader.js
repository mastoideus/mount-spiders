import React from 'react' 
import './ClientHeader.css'
import {Parallax} from 'react-parallax'
import Button from '../../components/Button'


const ClientHeader=(props)=>{
    return (
        <Parallax bgImage='https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'  strength={500}>
        <div className='clientHeader'>
           <div className='clientHeader__container'>
             <h1 className='clientHeader__title'>THE SPIDERS WEB</h1>
             <h3 className='clientHeader__subtitle'>PLACE TO MEET THE SPIDERS COMMUNITY</h3>
             <Button>JOIN CHAT</Button>
           </div>
        </div>
        </Parallax>
    )
}


export default ClientHeader
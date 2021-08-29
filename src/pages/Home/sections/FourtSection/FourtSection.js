import React, {useEffect} from 'react' 
import './FourtSection.css'
import {BsFillChatSquareQuoteFill} from 'react-icons/bs'
import FourtSItem from './FourtSItem'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Button from '../../../../components/Button'
import {Link} from 'react-router-dom'


const sectionData=[
    {id:'i1', name:'Harold Hakky', job:'lawyer', icon: <BsFillChatSquareQuoteFill/>, comment:'I had a great time with your team. I saw some places that i probably never gona visit again.', image:'https://qph.fs.quoracdn.net/main-qimg-5205ae8c593a621d64f2993487737374-mzj'},
    {id:'i2', name:'Karsten Spengenmann', job:'dentist', icon:<BsFillChatSquareQuoteFill/>,comment:'The whole crew was amazing, I took the golden Card last year and I cant call me a spider expert now, but I survived my first routes.', image:'https://images.squarespace-cdn.com/content/v1/5974dc143e00be4843ea0446/1560246853247-50TOJEEJCWM8UR0PD21R/DSC_0061.jpeg?format=1000w'},
    {id:'i3',name:'Katy Katalinsky',job:'waitress',icon:<BsFillChatSquareQuoteFill/>, comment:'It was the time of my life. I met new friends during the expeditions and now Im looking forward to the upcoming year hoping to be a golden member again.',image:'https://i.imgur.com/Jo78hZJ.jpg'}
]


const FourtSection=(props)=>{

    useEffect(()=>{
        Aos.init({duration:1500})
    })
    
    const sectionList=sectionData.map(item=>{
        return <FourtSItem
            id={item.id}
            key={item.id}
            name={item.name}
            job={item.job}
            icon={item.icon}
            image={item.image}
            text={item.comment}
        />
    })
    
    return (
        <div className='fourtSection'>
           <div data-aos='fade-up'>
           <h3 className='fourtSection__our'>Our</h3>
           <h1>Clients</h1>
           <div className='section__list'>
             {sectionList}
           </div>
           <Link to='/clients'><Button>READ MORE</Button></Link>
           </div>
        </div>
    )
}


export default FourtSection 
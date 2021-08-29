import React, {useEffect} from 'react' 
import './ThirdSection.css' 
import {FaMedal} from 'react-icons/fa'
import {RiMedalFill} from 'react-icons/ri'
import {RiMedalLine} from 'react-icons/ri'
import ThirdSItem from './ThirdSItem'
import Button from '../../../../components/Button'
import 'aos/dist/aos.css'
import Aos from 'aos'


const sectionData=[
    {id:'item1', title:'Bronze Card', description:'You will get access to all events and the opportunity to gain experience spending  time with the best mount spiders in our team.', icon:<RiMedalLine/>},
    {id:'item2', title:'Silver Card', description:'Take part in the first-step climbing exibitions and choose a guide that will provide you with the theorethical and practical knowledge of climbing.', icon:<RiMedalFill/>},
    {id:'item3', title:'Golden Card', description:'Take a one year trip around the world visiting the most important places of the climbing community and become a full member of our crew.',icon:<FaMedal/>}
]

const ThirdSection=(props)=>{

        useEffect(()=>{
        Aos.init({duration:1500})
    })
   
    
    const sectionList= sectionData.map(item=>{
        return <ThirdSItem
            id={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            key={item.id}
        />
    })
    
    
    
    return (
        <div className='tSection' >
           <div data-aos='fade-up'>
           <h4 className='tSection__explore'>EXPLORE</h4>
           <h2 className='tSection__title'>MEMBERSHIP FEATURES</h2>
           <div className='tSection__list'>
               {sectionList}
           </div>
           <Button>SEE MEMBERSHIPS</Button>
           </div>
        </div>
    )
}


export default ThirdSection 
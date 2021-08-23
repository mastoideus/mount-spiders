import React from 'react' 
import './SecondSection.css'
import Item from './Item'



const sectionData= [
    {id:'item1', title:'EQUIPMENT', description:'Having the right climbing tools is the key to success.', btn:'SEE MORE', image:'https://daretobeawildflower.com/wp-content/uploads/2019/10/Eco-Friendly-Climbing-Gear-scaled.jpeg'},
    {id:'item2', title:'GUIDE', description:'Team of experts who provide safe routes and paths for beginners.', btn:'OUR TEAM', image:'https://i.pinimg.com/474x/d5/1e/e8/d51ee897619f6b29b37a30110d36ff57.jpg' },
    {id:'item3', title:'TRAVEL', description:'See the world from a different spot visiting untouched places.', btn:'GALLERY', image:'https://static01.nyt.com/images/2012/11/18/travel/18FOOTSTEPS2_SPAN-sf/18FOOTSTEPS2-superJumbo.jpg'}
]




const SecondSection=(props)=>{

 
   const itemsList=sectionData.map(item=>{
       return <Item 
           id={item.id}
           title={item.title}
           description={item.description}
           btn={item.btn}
           image={item.image}
           key={item.id}
       />
   })
   
   
    return (
        <div className='sSection'>
          {itemsList}
        </div>
    )
}


export default SecondSection 
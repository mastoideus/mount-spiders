import React from 'react' 
import './FirstClientSection.css'
import Comment from './Comment'


const commData=[
    {id:'comm1', text:'THE BEST WAY TO FACE YOUR FEARS', name:'BRAD PITT'},
    {id:'comm2', text:'ADVENTUROUS AND CHALLENGING', name:'TOM CRUZ'},
    {id:'comm3',text:'I FOUND MY INNER CHILD AGAIN',name:'CHARLIE SHEEN'},
    {id:'comm4', text:'CLIMBING IS LIKE LOVE WITH KIDS',name:'MICHAEL JACKSON'}
]

const FirstClientSection=()=>{
    
    const commList=commData.map(comm=>{
        return <Comment 
            name={comm.name}
            key={comm.id}
            text={comm.text}
            id={comm.id}
        />
    })
    
    return (
        <div style={{height:'1500px'}} className='firstClientS'>
          
          <h3 className='firstClientS__clients'>CLIENTS</h3>
          <h1 style={{marginBottom:'120px'}}>COMMENTS</h1>
          <div className='firstClientS__commList'>
              {commList}
          </div>

       
        </div>
    )
}

export default FirstClientSection
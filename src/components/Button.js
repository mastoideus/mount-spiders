import React from 'react' 
import './Button.css'


const Button= (props)=>{
    return (
        <button className={`btn ${props.mobileBtn}`}>{props.children}</button>
    )
}


export default Button 
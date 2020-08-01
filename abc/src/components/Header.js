import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header=()=>{
    return (
        <div style={{display:"flex" ,marginLeft:"10px"}}>
            <Link to="/">
             <h3>Streamers</h3>
             </Link>
             <Link to="/">
             <h3 style={{marginLeft:"50px"}}>Streams</h3>
             </Link>
             <div style={{marginLeft:"50px"}}>
             <GoogleAuth/>
             </div>
        
           

        </div>
    )
}

export default Header
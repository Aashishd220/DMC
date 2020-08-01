import React from 'react'

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'482476361660-7bkn700s0fkvcnsp5r1mj8tva9rojimg.apps.googleusercontent.com',
                scope:'email' 
            })
        })
    }
    render(){
        return (
            <div>
                GoogleAuth
            </div>
        )
    }
   
}

export default GoogleAuth
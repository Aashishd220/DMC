import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'

const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route path="/streams"  exact component={StreamList}/>
        <Route path="/streams/show"  exact component={StreamShow}/>
        <Route path="/streams/delete"  exact component={StreamDelete}/>
        <Route path="/streams/edit"  exact component={StreamEdit}/>
        <Route path="/streams/create"  exact component={StreamCreate}/>

        
        </BrowserRouter>
    )
}

export default App;
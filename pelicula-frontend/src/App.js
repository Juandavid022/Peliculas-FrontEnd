import React from 'react';
import {Header} from './components/ui/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {MediaView} from './components/media/MediaView'

const App =() => {
  return   
    <Router>    
    <Header/>
    <Switch>
          <Route exact path="/" component = { MediaView }></Route>


    </Switch>

    </Router>    
  
  
}

export  {App,};

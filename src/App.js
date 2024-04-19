import React from 'react';
import {Header} from './components/ui/Header'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {MediaView} from './components/media/MediaView'
import {GeneroView} from './components/genero/GeneroView'
import {ProductoraView} from './components/productora/ProductoraView'
import {TipoView} from './components/tipo/TipoView'
import {DirectorView} from './components/director/DirectorView'
import { MediaUpdate } from './components/media/MediaUpdate';



const App =() => {
  return   (
    <Router>    
    <Header/>
    <Switch>
          <Route exact path="/" component = { MediaView }></Route>
          <Route exact path="/generos" component = { GeneroView }></Route>
          <Route exact path="/productoras" component = { ProductoraView }></Route>
          <Route exact path="/tipos" component = { TipoView }></Route>
          <Route exact path="/directores" component = { DirectorView }></Route>
          <Route exact path="/media/edit/:mediaId" component = { MediaUpdate }></Route>
          <Redirect to="/"/>
    </Switch>
    </Router>    
  
  )
}

export  {App,};

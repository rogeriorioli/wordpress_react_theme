import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from  './pages/Home'
import Single from  './pages/Single'
import Page from './pages/Page'
import NotFound from './pages/404'


const Routes =  () => (


  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>  
        <Route path={process.env.PUBLIC_URL +'/'} exact component={Home} />
        <Route path={process.env.PUBLIC_URL +'/post/:id/:slug'} component={Single} />
        <Route path={process.env.PUBLIC_URL +'/page/:id/:slug'}  component={Page} />
        <Route component={NotFound} />
      </Switch>
 
  </BrowserRouter>
)


export default Routes

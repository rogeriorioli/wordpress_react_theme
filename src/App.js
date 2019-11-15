import React from 'react';
import Routes from './Routes' 
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './style.css'
import Loader from './Components/Loader/Loader'

const App = () =>  {

  return(
    <div>
        <Loader/>
        <Header />
        <Routes />
        <Footer />
  </div>
    

  )
}

export default App;

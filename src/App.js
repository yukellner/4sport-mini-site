'use strict'

import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { AppHeader } from './components/header/AppHeader';
import { Home } from './pages/home/Home';
import CountdownTimer from './components/countdown/CountdownTimer';
import { Contact } from './pages/contact/Contact';
import { Enrollment } from './pages/enrollment/Enrollment';
import { Details } from './pages/details/Details';
import { Maps } from './pages/maps/Maps';
import { Sponsors } from './components/sponsors/Sponsors';
import { AppFooter } from './components/footer/AppFooter';
// import axios from 'axios';


function App() {

  

  // const dateTimeAfterThreeDays = NOW_IN_MS + DATE_IN_MS;
  //https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks




  const [eventObj, setEventObj] = useState(null)

  useEffect(() => {
    getJsonFromApi()
   
  }, [])

  const getJsonFromApi = async () => {
    // const axios = require('axios');
    // const res = await axios.get('https://www.4sport-live.com/miniSite/eventData/?comp=3432')
    // console.log(res)

    //http://hinawi:3000/
    try {
      const response = await fetch('https://www.4sport-live.com/miniSite/eventData/?comp=3432');
      const responseJson = await response.json();
      setEventObj(Object(responseJson))
      console.log(Object(responseJson))
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
  
  // console.log('apiu',eventObj)
  
  if (!eventObj) return
  
  
 

  return (
    <BrowserRouter >
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>CityRace</title>
          <link rel="canonical" href="https://staybnb-app.herokuapp.com" />
          <meta name="description" content="Vacation apartments rental" />
        </Helmet>

        {/* <AppHeaderMobile/> */}
        <main>
          <div className='left'></div>

          <div className='content'>
            <AppHeader eventObj={eventObj}/>
            <Routes>
              <Route path='/contact' element={<Contact />} />
              <Route path='/enrollment/:description' element={<Enrollment eventObj={eventObj}/>} />
              <Route path='/details' element={<Details />} />
              <Route path='/maps' element={<Maps />} />
              <Route path='/' element={<Home eventObj={eventObj}/>} />
            </Routes>
            {/* <LoginSignup/> */}
          </div>
          <div className='right'></div>
        </main>
        <Sponsors eventObj={eventObj}/>
        <AppFooter/>

        {/* <AppFooter />
        <AppFooterMobile/> */}
      </div>

      {/* <div className='counter-bc'>


      </div> */}


     
    </BrowserRouter>




  );
}

export default App;

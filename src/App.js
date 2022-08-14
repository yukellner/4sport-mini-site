import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { AppHeader } from './cmps/app-header';
import { Home } from './pages/home';


function App() {
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
          <left></left>
          <content>
            <AppHeader />
            <Routes>
              {/* <Route path='/stay/:stayId' element={<StayDetails />} /> */}
              <Route path='/home' element={<Home />} />
              {/* <Route path='/explore' element={<Explore />} /> */}
              {/* <Route path='/trips' element={<Trips />} /> */}
              {/* <Route path='/host' element={<Host />} /> */}
              {/* <Route path='/host-your-home' element={<HostYourHome />} /> */}
              <Route path='/' element={<Home />} />
            </Routes>
            {/* <LoginSignup/> */}
          </content>
          <right></right>
        </main>
        {/* <AppFooter />
        <AppFooterMobile/> */}
      </div>


    </BrowserRouter>



  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { AppHeader } from './cmps/app-header';
import { Home } from './pages/home';


function App() {
  return (
    <Router>
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>StayBnb</title>
          <link rel="canonical" href="https://staybnb-app.herokuapp.com" />
          <meta name="description" content="Vacation apartments rental" />
        </Helmet>

        {/* <AppHeader /> */}
        {/* <AppHeaderMobile/> */}
        <main>
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
        </main>
        {/* <AppFooter />
        <AppFooterMobile/> */}
      </div>
      

    </Router>



  );
}

export default App;

import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom';

import Home from './home';
import LogIn from './login';
import SignUp from './signup';
import StartPage from './startpage';
import Rewards from './rewards';
import Leaderboard from './leaderboard';
import Cart from './cart';
import WaterPollution from './water-pollution';
import PrivateComponent from './components/privatecomponent';
import { useMediaQuery } from "react-responsive";
import PlasticWaste from './plastic-waste';
import Deforestation from './deforestation';
import ProductDetail from './productdetail';
import AirPollution from './air-pollution';
import ProfilePage from './components/profile';
import ProfilePageMobile from './profilepage';
import DonationDetail from './donationdetail';
import HimachalLandslides from './himachallandslides';
import BiharFloods from './homecard-detail';
import HomeCardDetail from './homecard-detail';


function App() {
  let checkAuth = localStorage.getItem("user");
  let isAuth = false;
  if(checkAuth != null){
    isAuth = true;
  }
  let isDesktopScreen;
  if(useMediaQuery({ query: '(min-width: 900px)'})){
    isDesktopScreen = true;
  } else {
    isDesktopScreen = false;
  }

  localStorage.setItem("darkmode", "false");
  
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  // useEffect(function(){
  //   fetch("/api").then(
  //     function(response){
  //       return response.json;
  //     }
  //   )
  // }, [])
  return(
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/startpage' element={<StartPage />} />
      <Route path='/' element={<Navigate to={isAuth ? "/home" : useMediaQuery({ query: '(min-width: 900px)'}) ? "/signup" : "/startpage"} />} />

      <Route element={<PrivateComponent />}>
        <Route path='/home' element={<Home />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<ProfilePageMobile />} />
        <Route path='/waterpollution' element={<WaterPollution />} />
        <Route path='/airpollution' element={<AirPollution />} />
        <Route path='/plasticwaste' element={<PlasticWaste />} />
        <Route path='/deforestation' element={<Deforestation />} />
        <Route path='/checkout' element={<h1>Checkout Page</h1>} />

        <Route path='/products/:id' element={<ProductDetail name="Air Ink 50mm Marker" stars="4.5" count={1} price={39.99} impact={7} />} />
        <Route path='/products/airink50mmmarker' element={<ProductDetail name="Air Ink 50mm Marker" image="../../assets/images/airink50mm.jpg" stars="4.5" count={1} price={39.99} impact={7} />} />
        <Route path='/products/airink15mmmarker' element={<ProductDetail name="Air Ink 15mm Marker" image="../../assets/images/airink15mm.jpg" stars="4.5" count={1} price={35.00} impact={7} />} />
        <Route path='/products/airink2mmmarker' element={<ProductDetail name="Air Ink 2mm Marker" image="../../assets/images/airink2mm.png" stars="4.6" count={1} price={30.00} impact={7} />} />
        <Route path='/products/snakeplant' element={<ProductDetail name="Snake Plant" image="../../assets/images/snakeplant.jpg" stars="4.6" count={1} price={30.00} impact={5} />} />
        <Route path='/products/paperbags' element={<ProductDetail name="Paper Bags" image="../../assets/images/paperbag.jpg" stars="4.5" count={1} price={0.99} impact={5} />} />
        <Route path='/products/recyclabletoothbrush' element={<ProductDetail name="Recyclable Toothbrush" image="../../assets/images/toothbrush.jpg" stars="4.0" count={1} price={3.99} impact={5} />} />
        <Route path='/products/earthpots' element={<ProductDetail name="Earth Pots" image="../../assets/images/earthpots.jpg" stars="4.5" count={1} price={4.99} impact={6} />} />

        <Route path='/donations/:id' element={<DonationDetail name="Team Trees" fundraiser="ABC Group" donations={500} impact={7} />} />
        <Route path='/donations/cleaningatlantic' element={<DonationDetail name="Cleaning Atlantic" image="../../assets/images/ocean-pollution.jpg" fundraiser="ABC Group" donations={1000} impact={8} />} />
        <Route path='/donations/projectyamuna' element={<DonationDetail name="Project Yamuna" image="../../assets/images/yamuna.jpg" fundraiser="ABC Group" donations={500} impact={7} />} />
        <Route path='/donations/thegangaproject' element={<DonationDetail name="The Ganga Project" image="../../assets/images/ganga.jpg" fundraiser="ABC Group" donations={500} impact={7} />} />
        <Route path='/donations/savingtheocean' element={<DonationDetail name="Saving the Ocean" image="../../assets/images/ocean2.jpg" fundraiser="MIRPURI FOUNDATION" donations={500} impact={8} />} />
        <Route path='/donations/surfriderfoundation' element={<DonationDetail name="Surfrider Foundation" image="../../assets/images/surfrider-foundation.jpg" fundraiser="SURFRIDER FOUNDATION" donations={500} impact={8} />} />
        <Route path='/donations/cleandelhi' element={<DonationDetail name="Clean Delhi" image="../../assets/images/delhipollution.jpg" fundraiser="ABC GROUP" donations={500} impact={8} />} />
        <Route path='/donations/teamtrees' element={<DonationDetail name="Team Trees" image="../../assets/images/plant1.jpg" fundraiser="MR. BEAST" donations={2000} impact={9} />} />
        <Route path='/donations/plantabilliontrees' element={<DonationDetail name="Plant a Billion Trees" image="../../assets/images/plant2.jpg" fundraiser="NATURE.ORG" donations={2500} impact={9} />} />
        <Route path='/donations/plantfortheplanet' element={<DonationDetail name="Plant for the Planet" image="../../assets/images/plant3.jpg" fundraiser="ABC FOUNDATION" donations={1300} impact={9} />} />
        <Route path='/donations/50milliontrees' element={<DonationDetail name="50 Million Trees" image="../../assets/images/plant4.jpg" fundraiser="ABC FOUNDATION" donations={1500} impact={9} />} />
        

        <Route path='/himachallandslides' element={<HomeCardDetail title="Himachal Landslides" />} />
        <Route path='/biharfloods' element={<HomeCardDetail title="Bihar Floods" />} />
        <Route path='/uttrakhandlandslides' element={<HomeCardDetail title="Uttrakhand Landslides" />} />
        <Route path='/australiaforestfire' element={<HomeCardDetail title="Australia Forest Fire" />} />
        <Route path='/delhipollution' element={<HomeCardDetail title="Delhi Pollution" />} />
        <Route path='/yamunapollution' element={<HomeCardDetail title="Yamuna Pollution" />} />
        <Route path='/mumbaifloods' element={<HomeCardDetail title="Mumbai Floods" />} />
        <Route path='/oceanpollution' element={<HomeCardDetail title="Ocean Pollution" products="true" />} />
        <Route path='/theplasticproblem' element={<HomeCardDetail title="The Plastic Problem" products="true" />} />
        <Route path='/globalwarming' element={<HomeCardDetail title="Global Warming" products="true" />} />
      </Route>
    </Routes>
  )

  
}

export default App;

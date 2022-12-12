import React from "react";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import LightDarkButton from "./components/lightdarkbutton";
import SearchBar from "./components/searchbar";
import RewardCard from "./components/reward-card";
import { useMediaQuery } from "react-responsive";
import ProfileButtonMobile from "./components/profilebutton-mobile";

function Rewards(){
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        document.querySelector("body").style.backgroundColor = "#1E1F22"
    } else {
        document.querySelector("body").style.backgroundColor = "#F7F7F7"
    }

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="header">
                    <SearchBar />
                    {useMediaQuery({ query: '(min-width: 900px)'}) ? <LightDarkButton /> : <ProfileButtonMobile />}
                </div>
                <h2 className={darkmode === "true" ? "dark" : null}>Rewards</h2>
                <div className="rewards-container">
                    <div className="wrap-container reward1">
                        <RewardCard cherries="10" offer="Get 20% off on amazon shopping." />
                        <RewardCard cherries="10" offer="3 Months Free on Audible" />
                        <RewardCard cherries="10" offer="Rs. 50 cashback" />
                    </div>
                    <div className="wrap-container reward2">
                        <RewardCard cherries="50" offer="Flat 30% off on Skincare" />
                        <RewardCard cherries="50" offer="Rs. 20 to 100 Cashback" />
                        <RewardCard cherries="50" offer="30% off on BookMyShow" />
                        <RewardCard cherries="50" offer="Rs. 200 off on Groceries." />
                    </div>
                    <div className="wrap-container reward3">
                        <RewardCard cherries="100" offer="Rs. 500 off on Groceries." />
                        <RewardCard cherries="100" offer="Flat 50% off on BookMyShow" />
                        <RewardCard cherries="100" offer="Flat 50% off on Electronics on Amazon" />
                        <RewardCard cherries="100" offer="Rs. 200 Cashback" />
                    </div>
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default Rewards;
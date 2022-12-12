import React from "react";
import { useMediaQuery } from "react-responsive";
import DonationDetailCta from "./components/dd-cta";
import DonationDetailInfo from "./components/dd-infocontainer";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProductDetailCta from "./components/pd-cta";
import ProductDetailImage from "./components/pd-image";
import ProductDetailInfo from "./components/pd-infocontainer";
import ProfilePage from "./components/profile";
import ProfileButtonMobile from "./components/profilebutton-mobile";
import SearchBar from "./components/searchbar";

function DonationDetail(props) {
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        {document.querySelector("body").style.backgroundColor = "#1E1F22"}
    } else {
        {document.querySelector("body").style.backgroundColor = "#F7F7F7"}
    }

    if (useMediaQuery({ query: '(min-width: 900px)'})){
        return(
            <>
                <Navbar />
                <div className="main-container">
                    <div className="header">
                        <SearchBar />
                        <LightDarkButton />
                    </div>
                    <h2 className={darkmode === "true" ? "dark" : null}>Detailed Donations</h2>
    
                    <div className="grid-container">
                        <ProductDetailImage image={props.image} />
                        <DonationDetailInfo name={props.name} fundraiser={props.fundraiser} donations={props.donations} impact={props.impact} />
                        <DonationDetailCta name={props.name} desc={props.desc} count={props.count} price={props.price} impact={props.impact} id={Math.round(Math.random()*10000000000)} />
                    </div>
                </div>
                <ProfilePage />
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <div className="main-container">
                    <div className="header">
                        <SearchBar />
                        <ProfileButtonMobile />
                    </div>
                    <h2 className={darkmode === "true" ? "dark" : null}>Detailed Donations</h2>
    
                    <ProductDetailImage image={props.image} />
                    <div className="wrap-container">
                    <DonationDetailInfo name={props.name} fundraiser={props.fundraiser} donations={props.donations} impact={props.impact} />
                    </div>
                    <DonationDetailCta name={props.name} desc={props.desc} count={props.count} price={props.price} impact={props.impact} id={Math.round(Math.random()*10000000000)} />
                </div>
            </>
        )
    }
    
        
}

export default DonationDetail;
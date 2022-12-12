import React from "react";
import UserBoard from "./userboard";

function LocalBoard() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name + "321";

    return (
        <>
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Adarsh" username="adarsh321" level="23" location="INDIA" leaves="12352" />
            <UserBoard rank="2" image="../../assets/images/user1.png" name="Raju" username="raju321" level="22" location="INDIA" leaves="12250" />
            <UserBoard rank="3" image="../../assets/images/user1.png" name="Shivam" username="shivam321" level="22" location="INDIA" leaves="12210" />
            <UserBoard rank="4" image="../../assets/images/user1.png" name="Shrey" username="shrey321" level="22" location="INDIA" leaves="12190" />
            <UserBoard rank="5" image="../../assets/images/user1.png" name="Kunal" username="kunal321" level="22" location="INDIA" leaves="12150" />
            <div className="you-board">
                <UserBoard rank="108" image="../../assets/icons/user.svg" name={user.name} username={username} level="1" location="INDIA" leaves="16" />
            </div>
        </>
    )
}

export default LocalBoard;
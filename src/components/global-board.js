import React from "react";
import UserBoard from "./userboard";

function GlobalBoard() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name + "321";

    return (
        <>
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Greta" username="greta321" level="24" location="SWEDEN" leaves="12442" />
            <UserBoard rank="2" image="../../assets/images/user1.png" name="Alex" username="alex321" level="24" location="USA" leaves="12390" />
            <UserBoard rank="3" image="../../assets/images/user1.png" name="John" username="john321" level="24" location="USA" leaves="12380" />
            <UserBoard rank="4" image="../../assets/images/user1.png" name="Ashley" username="ashley321" level="24" location="GERMANY" leaves="12370" />
            <UserBoard rank="5" image="../../assets/images/user1.png" name="Julie" username="julie321" level="24" location="UK" leaves="12360" />
            <div className="you-board">
                <UserBoard rank="2342" image="../../assets/icons/user.svg" name={user.name} username={username} level="1" location="INDIA" leaves="16" />
            </div>
        </>
    )
}

export default GlobalBoard;
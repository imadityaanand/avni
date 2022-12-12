import React from "react";
import HeadingButton from "./heading-button";
import ProductCard from "./productcard";

function PWProducts(){
    return (
        <>
            <div className="wrap-container">
                <ProductCard
                    name="Paper Bags"
                    image="../../assets/images/paperbag2.jpg"
                    desc="Recyclable paper bags"
                    rating="4.5"
                    price="0.99"
                    impact="5"
                />
                <ProductCard
                    name="Recyclable Toothbrush"
                    image="../../assets/images/toothbrush2.jpg"
                    rating="4.0"
                    price="3.99"
                    impact="5"
                />
                <ProductCard
                    name="Earth Pots"
                    image="../../assets/images/earthpots.jpg"
                    desc="Paper bags made of recyclable matiral."
                    rating="4.5"
                    price="4.99"
                    impact="6"
                />
            </div>
        </>
    )
}

export default PWProducts;
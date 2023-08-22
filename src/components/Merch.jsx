//import React from "react";
import front from "../assets/merch1-front.jpg"
import back from "../assets/merch1-back.jpg"
import front1 from "../assets/merch2-front.jpg"
import back1 from "../assets/merch2-back.jpg"
import front2 from "../assets/merch3-front.jpg"
import back2 from "../assets/merch3-back.jpg"
import front3 from "../assets/merch4-front.jpg"
import back3 from "../assets/merch4-back.jpg"
import front4 from "../assets/merch7-front.jpg"
import back4 from "../assets/merch7-back.jpg"
import front5 from "../assets/merch6-front.jpg"
import back5 from "../assets/merch6-back.jpg"
import front6 from "../assets/merch8-front.jpg"
import back6 from "../assets/merch8-back.jpg"
import front7 from "../assets/merch9-front.jpg"
import back7 from "../assets/merch9-back.jpg"
import "./merch.css";

const Merch = () => {
    return (
        <div className="box">
        <div className="group-image">
            <img className="merch-logo" alt="Merch" src="src/assets/merch-logo.jpg" />
        <div className="overlap">
        <div className="rectangle-border"/>
        </div>
        <div className="group">
        <div className="change-photo">
            <img src={front} alt=""/>
        </div>
        <div className="change-photo">
            <img src={back} alt=""/>
        </div>
        <div className="change-photo1">
            <img src={front1} alt=""/>
        </div>
        <div className="change-photo1">
            <img src={back1} href="" alt=""/>
        </div>
        <div className="change-photo2">
            <img src={front2} alt=""/>
        </div>
        <div className="change-photo2">
            <img src={back2} alt=""/>
        </div>
        <div className="change-photo3">
            <img src={front3} alt=""/>
        </div>
        <div className="change-photo3">
            <img src={back3} alt=""/>
        </div>
        <div className="change-photo4">
            <img src={front4} alt=""/>
        </div>
        <div className="change-photo4">
            <img src={back4} alt=""/>
        </div>
        <div className="change-photo5">
            <img src={front5} alt=""/>
        </div>
        <div className="change-photo5">
            <img src={back5} alt=""/>
        </div>
        <div className="change-photo6">
            <img src={front6} alt=""/>
        </div>
        <div className="change-photo6">
            <img src={back6} alt=""/>
        </div>
        <div className="change-photo7">
            <img src={front7} alt=""/>
        </div>
        <div className="change-photo7">
            <img src={back7} alt=""/>
        </div>
                {/* <div className="merch-1-title"> ITEM 1 </div>
                <div className="merch-2-title"> ITEM 2 </div>
                <div className="merch-3-title"> ITEM 3 </div>
                <div className="merch-4-title"> ITEM 4 </div> */}
                <div className="item-details-1">
                    <h1 className="item-name-1"> Andsah jaSHD Sbvvf </h1> 
                    <h1 className="color-1"> Color: </h1>
                    <div className="rectangle-1"> </div>
                    <div className="rectangle-2"> </div>
                    <h1 className="price-1"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-2">
                    <h1 className="item-name-2"> Timeless Waves (Classic) </h1> 
                    <h1 className="color-2"> Color: </h1>
                    <div className="rectangle-3"> </div>
                    <div className="rectangle-4"> </div>
                    <h1 className="price-2"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-1">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-3">
                    <h1 className="item-name-3"> Fusnid Yvdvhvw Tlwjd </h1> 
                    <h1 className="color-3"> Color: </h1>
                    <div className="rectangle-5"> </div>
                    <div className="rectangle-6"> </div>
                    <h1 className="price-3"> Prices: </h1>
                    <p className="s-XXL-XXXL-and-2">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-4">
                    <h1 className="item-name-4"> Beach Break Basics </h1> 
                    <h1 className="color-4"> Color: </h1>
                    <div className="rectangle-7"> </div>
                    <div className="rectangle-8"> </div>
                    <h1 className="price-4"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-3">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-5">
                    <h1 className="item-name-5"> SharkSwell: Ride the Wave of Fearless Style </h1> 
                    <h1 className="color-5"> Color: </h1>
                    <div className="rectangle-9"> </div>
                    <div className="rectangle-10"> </div>
                    <h1 className="price-5"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-4">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-6">
                    <h1 className="item-name-6"> Tidal Vibes </h1> 
                    <h1 className="color-6"> Color: </h1>
                    <div className="rectangle-11"> </div>
                    <div className="rectangle-12"> </div>
                    <h1 className="price-6"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-5">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-7">
                    <h1 className="item-name-7"> Wave of Ambition </h1> 
                    <h1 className="color-7"> Color: </h1>
                    <div className="rectangle-13"> </div>
                    <div className="rectangle-14"> </div>
                    <h1 className="price-7"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-6">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="item-details-8">
                    <h1 className="item-name-8"> Ygddc Cfsxcd Wvbghy </h1> 
                    <h1 className="color-8"> Color: </h1>
                    <div className="rectangle-15"> </div>
                    <div className="rectangle-16"> </div>
                    <h1 className="price-8"> Prices: </h1>  
                    <p className="s-XXL-XXXL-and-7">
                        <span className="span">S - XXL: </span>
                        <span className="text-wrapper-2"> $30 <br /> </span>
                        <span className="span">XXXL and above</span>
                        <span className="text-wrapper-2">: $40</span>
                    </p>
                </div>
                <div className="wishlist">   
                    <img className="heart" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-2" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-3" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-4" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-5" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-6" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-7" alt="Heart" src="src/assets/heart.jpg" />
                    <img className="heart-8" alt="Heart" src="src/assets/heart.jpg" />
                </div>
                <div className="=cart">
                    <img className="cart" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-2" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-3" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-4" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-5" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-6" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-7" alt="Cart" src="src/assets/cart.jpg" />
                    <img className="cart-8" alt="Cart" src="src/assets/cart.jpg" />
                </div>
            </div>
        </div>
        </div>
    );
};


export default Merch

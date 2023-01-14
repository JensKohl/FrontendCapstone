import React from "react";
import "../App.css";
import Bruschetta from '../images/bruschetta.jpg';
import GreekSalad from '../images/greek salad.jpg';
import LemonDessert from '../images/lemon dessert.jpg';


function Specials (){
    return (
        <section id="Specials">
            <div className="container">
                <div className="content">
                    <h2>This week's specials!</h2>
                    <button aria-label="Online Menu">Online Menu</button>
                </div>

                <div className='SpecialItems'>
                    <div className="SpecialItem">
                        <img src={GreekSalad} alt="Greek Salad"/>
                        <div>
                            <h3>Greek Salad</h3><h3>12.99$</h3>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>

                        <button aria-label="Order item online" disabled={true}>Order a delivery</button>

                    </div>

                    <div className="SpecialItem">
                        <img src={Bruschetta} alt="Bruschetta"/>
                        <div>
                            <h3>Bruschetta</h3><h3>5.99$</h3>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>

                        <button aria-label="Order item online" disabled={true}>Order a delivery</button>
                    </div>

                    <div className="SpecialItem">
                        <img src={LemonDessert} alt="Lemon Dessert"/>
                        <div>
                            <h3>Lemon dessert</h3><h3>5$</h3>
                        </div>
                        <p>This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button aria-label="Order item online" disabled={true}>Order a delivery</button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Specials;
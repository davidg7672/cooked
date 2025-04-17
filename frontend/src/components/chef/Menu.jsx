import React from "react";
import Card from "../card/Card";
import tamalesImage from "../../images/food/tamales.jpg";
import quesadillaImage from "../../images/food//Quesadilla.jpg";
import tacoImage from "../../images/food/Taco.jpg";
import "./Menu.css";

function Menu() {
    // Array of menu items
    const items = [
        {
            id: 1,
            name: "Tamale",
            chef: "Chef Maria",
            description:
                "Delicious tamales made with corn masa and filled with a spicy pork mixture.",
            image: tamalesImage,
            price: 12.99,
        },
        {
            id: 2,
            name: "Quesadilla",
            chef: "Chef Juan",
            description:
                "Cheesy quesadilla served with fresh guacamole and salsa.",
            image: quesadillaImage,
            price: 12.99,
        },
        {
            id: 3,
            name: "Taco",
            chef: "Chef Luis",
            description:
                "Authentic street-style tacos with marinated beef, cilantro, and onion.",
            image: tacoImage,
            price: 12.99,
        },
    ];

    return (
        <>
            <div className="menu-container">
                <h1>Featured Items</h1>
                <div className="menu-items">
                    {items.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                name={item.name}
                                chef={item.chef}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Menu;

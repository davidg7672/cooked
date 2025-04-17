import React from "react";
import "./Menu.css";
//import Card from "../card/Card";
import ChefCard from "../card/ChefCard";
import gordon from "../../images/chefs/gordon.avif";
import guyFieri from "../../images/chefs/guy-fieri.jpeg";
import royChoi from "../../images/chefs/royChoi.webp";

function FeaturedSection() {
    const items = [
        {
            id: 1,
            chef: "Chef Gordon",
            description: "New American and British Food",
            image: gordon,
            featuredItems: [
                "Beef Wellington",
                "Sticky Toffee Pudding",
                "Fish & Chips",
            ],
        },
        {
            id: 2,
            chef: "Chef Guy Fieri",
            description: "Killer Burgers and Chicken Alfredo",
            image: guyFieri,
            featuredItems: [
                "Dragon's Breath Chili",
                "Trash Can Nachos",
                "Bacon Mac 'n' Cheese Burger",
            ],
        },
        {
            id: 3,
            chef: "Chef Roy Choi",
            description: "Korean-Mexican Cuisine",
            image: royChoi,
            featuredItems: [
                "Kogi Tacos",
                "Short Rib Sliders",
                "Kimchi Quesadilla",
            ],
        },
    ];

    return (
        <>
            <div className="menu-container">
                <h1>Featured Chefs</h1>
                <div className="menu-items">
                    {items.map((item) => {
                        return (
                            <ChefCard
                                id={item.id}
                                chef={item.chef}
                                description={item.description}
                                image={item.image}
                                items={item.featuredItems}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default FeaturedSection;

import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../review/Reviews";
import Price from "../price/Price";
import classes from "./Card.module.css";

function Card({ foods }) {
    return (
        <ul className={classes.foodList}>
            {foods.map((food) => (
                <li key={food.id}>
                    <Link to={`/food/${food.id}`}>
                        <img
                            className={classes.foodImage}
                            src={`${foods.imageUrl}`}
                            alt={food.name}
                        />
                        <div className={classes.content}>
                            <div className={classes.name}>{food.name}</div>
                            <span
                                className={`${classes.favorite} ${
                                    food.favorite ? "" : classes.not
                                }`}
                            >
                                *
                            </span>
                            <div className={classes.reviews}>
                                <Reviews stars={food.stars} />
                            </div>

                            <div className={classes.productItemFooter}>
                                <div className={classes.origins}>
                                    {food.origins.map((origin) => (
                                        <span key={origin}>{origin}</span>
                                    ))}
                                </div>
                                <div className={classes.cookTime}>
                                    {food.cookTime} Minutes
                                </div>
                            </div>
                            <div className={classes.price}>
                                <Price price={food.price} />
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
            ;
        </ul>
    );
}

export default Card;

import React from "react";
import Price from "../price/Price";
import StarRating from "../starRating/StarRating";
import { Link } from "react-router-dom";
import classes from "./starRating.module.css";

function Thumbnails({ foods }) {
    return (
        <>
            <ul className={classes.list}>
                {foods.map((food) => (
                    <li key={food.id}></li>
                ))}
            </ul>
        </>
    );
}

export default Thumbnails;

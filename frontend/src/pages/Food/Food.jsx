import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../tasks/foodTasks";
import classes from "./Food.module.css";
import Price from "../../components/price/Price";
import Reviews from "../../components/review/Reviews";
import { useCart } from "../../hooks/useCart";
import Error from "../../components/error/Error";

function Food() {
    const [food, setFood] = useState({});
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(food);
        navigate("/cart");
    };

    // getting food
    useEffect(() => {
        getById(id)
            .then((data) => {
                console.log("fetched foods: ", data);
                setFood(data);
            })
            .catch((error) => console.error("error fetching foods: ", error));
    }, [id]);

    console.log(food);

    return (
        <>
            {/* if no food is on the site */}
            {!food && <Error message="Not found" linkTest="Go back Home" />}

            {food && (
                <div className={classes.container}>
                    <img
                        className={classes.image}
                        src={`${food.imageUrl}`}
                        alt={food.name}
                    />

                    <div className={classes.details}>
                        <div className={classes.header}>
                            <span className={classes.name}>
                                {food.name}
                                {}
                            </span>
                        </div>
                        <div className={classes.rating}>
                            <Reviews stars={food.stars} size={20} />
                        </div>
                        <div className={classes.origins}>
                            {food.origins?.map((origin) => (
                                <span key={origin}>{origin}</span>
                            ))}
                        </div>
                        <div className={classes.cookTime}>
                            <span>
                                Cook time: <strong>{food.cookTime} </strong>
                                Minutes
                            </span>
                        </div>
                        <div className={classes.price}>
                            <Price price={food.price} />
                        </div>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Food;

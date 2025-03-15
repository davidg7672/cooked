import React from "react";
import classes from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";
import Title from "../../components/title/Title";
import { Link } from "react-router-dom";
import Price from "../../components/price/Price";
import Error from "../../components/error/Error";

function Cart() {
    const { cart, removeFromCart, changeQuantity } = useCart();

    return (
        <>
            <Title title="Cart" margin="1.5rem 0 0 2.5rem" />

            {/* Error checking */}
            {cart.items.length === 0 && (
                <Error message="Cart Empty" linkText="Keep Looking for food!" />
            )}

            {cart && cart.items.length > 0 && (
                <div className={classes.container}>
                    <ul className={classes.list}>
                        {cart.items.map((item) => (
                            <li key={item.food.id}>
                                <div>
                                    <img
                                        src={`${item.food.imageUrl}`}
                                        alt={item.food.name + "h"}
                                    />
                                </div>
                                <div>
                                    <Link to={`/food/${item.food.id}`}>
                                        {item.food.name}
                                    </Link>
                                </div>

                                <div>
                                    <select
                                        value={item.quantity}
                                        onChange={(e) =>
                                            changeQuantity(
                                                item,
                                                Number(e.target.value)
                                            )
                                        }
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div>
                                    <Price price={item.price} />
                                </div>

                                <div>
                                    <button
                                        className={classes.removeButton}
                                        onClick={() =>
                                            removeFromCart(item.food.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={classes.checkout}>
                        <div>
                            <div className={classes.foodsCount}>
                                {cart.totalCount}
                            </div>
                            <div className={classes.totalPrice}>
                                <Price price={cart.totalPrice} />
                            </div>
                        </div>
                        <Link to="/checkout">Proceed To Checkout</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;

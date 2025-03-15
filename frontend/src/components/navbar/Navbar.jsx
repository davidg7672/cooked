import React from "react";
import Logo from "./Logo.jsx";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";

function Navbar() {
    // fake data
    const { user, logout } = useAuth();

    const { cart } = useCart();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    <Logo />
                </Link>

                <ul>
                    {/* If user theres a user, show everything, if nothing, then bring to login */}
                    {user ? (
                        <li className={classes.menuContainer}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">Profile</Link>
                                <Link to="/orders">Order</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}

                    <li>
                        <Link to="/cart">
                            <div className={classes.cart}>
                                <span>Cart</span>
                                {cart.count > 0 && (
                                    <span className={classes.cartCount}>
                                        {cart.count}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./search.module.css";

/**
 * Search Component
 *
 * A reusable search input that updates the URL based on user input.
 * Supports customizable routing and styling via props.
 *
 */
function Search({
    searchRoute = "/search/",
    defaultRoute = "/",
    margin,
    placeholder = "Search Food",
}) {
    // state for storing input
    const [term, setTerm] = useState("");
    // navigation from router-dom and params from route path
    const navigate = useNavigate();
    const { searchTerm } = useParams();

    useEffect(() => {
        setTerm(searchTerm ?? "");
    }, [searchTerm]);

    const search = async () => {
        term ? navigate(searchRoute + term) : navigate(defaultRoute);
    };

    return (
        <>
            <div className={classes.container} style={{ margin }}>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => setTerm(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && search()}
                    value={term}
                />
                <button onClick={search}>Search</button>
            </div>
        </>
    );
}

export default Search;

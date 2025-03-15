import React, { useEffect } from "react";
import { useReducer } from "react";
import { getFood } from "../../tasks/foodTasks";
import Card from "../../components/card/Card";
import Error from "../../components/error/Error";

const initState = { foods: [] };
const reducer = (state, action) => {
    switch (action.type) {
        case "FOODS_LOADED":
            return { ...state, foods: action.payload };
        default:
            return state;
    }
};

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { foods } = state;

    useEffect(() => {
        getFood()
            .then((foods) => dispatch({ type: "FOODS_LOADED", payload: foods }))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            {/* no food */}
            {foods.length === 0 && <Error />}
            <Card foods={foods} />
        </>
    );
};

export default Home;

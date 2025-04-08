import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import Tags from "../../components/tags/Tag";
import Thumbnails from "../../components/thumbnails/Thumbnails";
import NotFound from "../../components/NotFound/NotFound";
import {
    getAll,
    getAllByTag,
    getAllTags,
    search,
} from "../../services/foodService";

// empty states
const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "FOODS_LOADED":
            return { ...state, foods: action.payload };
        case "TAGS_LOADED":
            return { ...state, tags: action.payload };
        default:
            return state;
    }
};

function Home() {
    // reducer used to manage state of foods changing
    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods, tags } = state;

    // extra route parameters for dynamic data loading
    const { searchTerm, tag } = useParams();

    // fetching tags and foods
    useEffect(() => {
        getAllTags().then((tags) =>
            dispatch({ type: "TAGS_LOADED", payload: tags })
        );

        const loadFoods = tag
            ? getAllByTag(tag)
            : searchTerm
            ? search(searchTerm)
            : getAll();

        loadFoods.then((foods) =>
            dispatch({ type: "FOODS_LOADED", payload: foods })
        );
    }, [searchTerm, tag]); // updates when search term or tag changes

    return (
        <>
            <Search />
            <Tags tags={tags} />
            {foods.length === 0 && <NotFound linkText="Reset Search" />}
            <Thumbnails foods={foods} />
        </>
    );
}

export default Home;

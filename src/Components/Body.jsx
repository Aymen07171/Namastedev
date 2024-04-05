    import React, { useEffect, useState } from "react";
    import { useListRestaurant } from "../utils/useListRestaurant";
    import { Shimmer } from "./Shimmer";
    import { Link } from "react-router-dom";
    import {RestaurantCard} from "./RestaurantCard";
    import { SearchFood } from "./SearchFood";

    export const Body = () => {

    const customRestaurant = useListRestaurant();;

    

    const [listRestaurants, setListRestaurant] = useState([]);

    

    useEffect(() => {
        setListRestaurant(customRestaurant);
    },[customRestaurant])
    

    return listRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <SearchFood />

            <button className="filter-btn" onClick={() => {
                const filteredList = listRestaurants.filter((res) => res.info.avgRating > 4.2);
                setListRestaurant(filteredList)
                console.log(filteredList)
            }}>
            Top Rated Restaurant
            </button>


        <div className="res_container grid grid-cols-3 gap-4">
            {listRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                {/* Assuming RestaurantCard is a valid component */}
                <RestaurantCard resData={restaurant} />
            </Link>
            ))}

            
        </div>
        </div>
    );
    };

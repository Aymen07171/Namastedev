import { useState } from "react";
import { useListRestaurant } from "../utils/useListRestaurant";
import { RestaurantCard } from "./RestaurantCard";

export const SearchFood = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const restaurantList = useListRestaurant();

    const handleSearch = () => {
        const filteredRestaurants = restaurantList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurantList(filteredRestaurants);
    };

    return (
        <div>
            <input
                className="search"
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="searchBtn" onClick={handleSearch}>
                Search
            </button>

            <div className="res_container grid grid-cols-3 gap-4">
                { 
                    filteredRestaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

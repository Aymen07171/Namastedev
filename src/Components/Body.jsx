    import { RestaurantCard } from "./RestaurantCard";
    import { useState, useEffect } from "react";
    import { swiggy_api_URL } from "../utils/contants";
    import { Shimmer } from "./Shimmer";




    export const Body = () => {
    
        const [listRestaurant, setListRestaurant] = useState([]);

        const [searchText,setSearchText] = useState("")


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        setListRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
        
        }

    return listRestaurant.length === 0 ?  <Shimmer /> :  (
        <div className="body">
            <div  className="search" >
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button className="searchBtn"  onClick={() => {
                    const filteredRestaurants = listRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setListRestaurant(filteredRestaurants);
                }}>Search</button>
            </div>
    

        <div className="filter">

            <button className="filter-btn" onClick={() => {
                const filteredList = listRestaurant.filter((res) => res.info.avgRating > 4.2);
                setListRestaurant(filteredList)
            }}>
            Top Rated Restaurant
            </button>
        </div>

        <div className="res_container">
            {listRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
            ))}
        </div>
        </div>
    );
    };

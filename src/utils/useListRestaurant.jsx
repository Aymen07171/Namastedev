import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../utils/contants";
import {corsBypasser} from "../utils/contants";
export const useListRestaurant = () => {

    const [listRestaurant, setListRestaurant] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch( swiggy_api_URL);
            const json = await data.json();
            setListRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
            );
        };

        fetchData();
        
    }, []);

    return listRestaurant


}


import { useEffect, useState } from "react"
import { swigy_apiMenuIt } from '../utils/contants';



export const useRestaurantMenu = (resId) => {

    const [resInfo,setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {

        const data = await fetch(swigy_apiMenuIt + resId);
        const json = await data.json();
        setRestInfo(json.data);
    }

    return resInfo;

}
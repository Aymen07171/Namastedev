import React, { useEffect, useState } from "react";

export const useAboutUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
        // console.log(data);
        } catch (error) {
        console.error("Error fetching user data: ", error);
        }
    };

    return users
}
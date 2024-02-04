import React from "react";
import ReactDOM from "react-dom/client";    
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
/**
 * TODO : Create an Ordering Food App Called NamastePizza 
 * ? Header (Logo , Nav Items)
 * ? Body (Search , ResutrantContainer(Restaurant Card) )
 * ? Footer (Copyright , Links ,Address,Contact)
 */








const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
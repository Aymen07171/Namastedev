import { useEffect, useState } from 'react'
import logo from '../Images/logoipsum.svg'
import { Link } from 'react-router-dom';


export const Header = () => {



    const [btnName,setBtnName] = useState("Login");

    useEffect(() => {
    
    },[])

    return (
        <div className="header">
            <div className="logo_container" >
            <img src= {logo}  />

            </div>

            <div className="nav_item">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/about">About </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className='ButtnCardheader' onClick={() => { btnName === "Login" ?  setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>

    )
}

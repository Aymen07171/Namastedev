import { useState } from 'react'
import logo from '../Images/logoipsum.svg'
export const Header = () => {



    const [btnName,setBtnName] = useState("Login");
    


    return (
        <div className="header">
            <div className="logo_container" >
            <img src= {logo}  />

            </div>

            <div className="nav_item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact </li>
                    <li>Cart</li>
                    <button className='ButtnCardheader' onClick={() => { btnName === "Login" ?  setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                </ul>

            </div>


        </div>

    )
}

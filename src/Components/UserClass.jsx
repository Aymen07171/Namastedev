import React from "react";
import { Link } from 'react-router-dom';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name : "Dummy",
            }
        }

        // console.log(props)
    }
async componentDidMount(){
    const data = await fetch(" https://api.github.com/users/Aymen07171");
    const json = await data.json();

    console.log(json);

    this.setState({
        userInfo : json,
    });

    }
    render() {
        const {name,avatar_url,html_url} = this.state.userInfo;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h2 >Name : {this.state.userInfo.name}</h2>
                <img style={{ width: '150px', display : "inline-block" }} src={avatar_url} alt="" />
                <Link to={html_url}>
                    <button style={{ display : 'block' }}>Github</button>
                </Link>
                
            </div>
        )
    }
}

export default UserClass;
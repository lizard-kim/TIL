import React from 'react';
import './Header.scss';

class Header extends React.Component{

    render() {
        return (
            <div className="Header">
                <img src="./a.png" alt="icon" />
                <br/>
                <p className="menu Home"> Home! </p>
                <p className="menu Product"> Product </p>
                <p className="menu Membership"> Membership </p>
                <p className="menu On-Demand"> On-Demand </p>
                <p className="menu Partnership"> Partnership </p>
            </div>
        )
    }

}

export default Header
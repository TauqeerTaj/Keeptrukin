import React, { useEffect } from 'react';
import './Artist.css';
import Image from '../assets/User.png';

const ArtistList = props => {
    const set = () => {
        console.log(props.click)
    }

    return (
        <div>
            {props.show ? <div className="ml-auto  mt-5 w-75 main">
                <div className="tabs" style={{ width: "30%", marginRight: "2%", display: "inline", float: "left" }}>
                    <div className="bg-white px-4 pb-1 pt-3 float-left w-100" style={{ borderRadius: "5px" }} onClick={set}>
                        <div className="img" style={{ width: "30%", float: "left" }}>
                            <img src={Image} alt="user" style={{ width: "30px", heidth: "30px", position: "relative", top: "12px" }} />
                        </div>
                        <div className="name" style={{ width: "70%", float: "left" }}>
                            <p className="font-weight-bold text-dark">{props.name}</p>
                            <p style={{ color: "#a3a3a3" }}>{props.id}</p>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}

export default ArtistList;
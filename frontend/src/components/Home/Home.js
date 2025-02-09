import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div class="content">
                <div>
                <h1>DeeEvents</h1>
                    <p className="tagline">
                        <em> Seamless Event Management </em>
                    </p>
                    <p className="about">
                    Experience the ease of organizing and managing events with DeeEvents—your all-in-one solution for effortless planning. From streamlined registrations to seamless scheduling, our intuitive platform ensures a smooth and professional experience.

With robust features designed for efficiency, DeeEvents handles the complexities, allowing you to focus on delivering exceptional events. Elevate your event management with confidence and precision.
                    </p>
                </div>
                
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <div>
                <h1>DeeEvents</h1>
                    <p className="tagline">
                        <em> Seamless Event Management </em>
                    </p>
                    <p className="about">
                    Experience the ease of organizing and managing events with DeeEvents—your all-in-one solution for effortless planning. From streamlined registrations to seamless scheduling, our intuitive platform ensures a smooth and professional experience.

With robust features designed for efficiency, DeeEvents handles the complexities, allowing you to focus on delivering exceptional events. Elevate your event management with confidence and precision.
                    </p>
                </div>
            </div>
            
        )
    }
    
}
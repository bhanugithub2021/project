import React, { useState } from "react";


const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const upDateTime = () => {
        setTime(new Date().toLocaleTimeString());
    };
    setInterval(upDateTime, 1000);
    return (
        <h3>{time}</h3>
    )



};


export default Time;
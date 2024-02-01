import React from "react";

import './email.styles.css';

export const Email = ({mail}) =>{
    const { id, from, address, time, message, subject, tag, read } = mail; 
    
return (
    <div className='email-container'>
        <h1 EMAIL></h1>
        <h2>{id}</h2>
        <p>{from}</p>
        <p>{subject}</p>
        <p>{address}</p>
        <p>{time}</p>
        <p>{message}</p>
        <p>{tag}</p>
        <p>{read}</p>
    </div>
)
};


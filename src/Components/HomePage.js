import React from 'react';
import Logo from "../assets/logo.png";
import Buttons from './Buttons';

export default function HomePage({onClick, input, updateInput}){

    return(
        <div className="home">
            <div className="img">
                <img src={Logo} alt="Logo"/>
            </div>
            <input placeholder='Sua meta de zaps' value={input} onChange={e => updateInput(e.target.value)}/>
            <Buttons onClick={onClick}/>
        </div>
    )}
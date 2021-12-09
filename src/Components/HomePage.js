import React from 'react';
import Logo from "../assets/logo.png";
import Buttons from './Buttons';

export default function HomePage({onClick}){
    return(
        <div className="home">
            <img src={Logo} alt="Logo"/>
            <input placeholder='Sua meta de zaps'/>
            <Buttons onClick={onClick}/>
        </div>
    )}
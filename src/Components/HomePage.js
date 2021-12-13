import React from 'react';
import Logo from "../assets/logo.png";
import Buttons from './Buttons';

export default function HomePage({onClick, input, updateInput}){

    return(
        <div className="home">
            <div className="img">
                <img src={Logo} alt="Logo"/>
            </div>
            <input type='number' placeholder='Sua meta de zaps' value={input} onChange={e => updateInput(e.target.value)}/>
            <span className="description">Coloque um número entre 0 e o máximo de perguntas do flashCard <br /> (número entre parenteses)</span>
            <Buttons onClick={onClick}/>
        </div>
    )}
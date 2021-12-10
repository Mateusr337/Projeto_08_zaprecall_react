import Header from "./Header";
import Card from './Card';
import CardAnswer from './CardAnswer';
import CardBorder from './CardBorder';
import { useState } from "react";

export default function Game({game}){

    const length = game.length;
    let indice = 0;

    let change = game[0].question;
    let [show, setShow] = useState(<Card gaming={gaming} game={change} length={length} indice={indice}/>);

    function gaming(situation, color){
        if(situation === 'question'){
            change = game[indice].answer;
            setShow(<CardAnswer gaming={gaming} game={change} length={length} indice={indice}/>);

        }else if(situation === 'answer'){
            setShow(<CardBorder gaming={gaming} game={change} length={length} indice={indice} color={color}/>);

        }else if(situation === 'answered'){
            indice++;
            change = game[indice].question;
            setShow(<Card gaming={gaming} game={change} length={length} indice={indice}/>);
        }
    }

    return(
        <div className="game">
            <Header />
            <div className="main">
                {show}
            </div>
        </div>
    )}
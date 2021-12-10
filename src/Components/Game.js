import Header from "./Header";
import Card from './Card';
import CardAnswer from './CardAnswer';
import CardBorder from './CardBorder';
import FinalScreen  from './FinalScreen';

import crying from '../assets/crying.jpeg';
import { useState } from "react";

export default function Game({game, changeView}){

    const length = game.length;
    let index = 0;
    let change = game[0];
    let [show, setShow] = useState(<Card gaming={gaming} game={change} length={length} index={index}/>);

    const finalMessage = {
        fail: {
            title: `Putz ...`, text: 'Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!'
        },
        sucess: {
            title: `PARABÉNS ...`, text: `Você não esqueceu de nenhum flashcard!`
        }
    }

    function gaming(situation, color){
        if(situation === 'question'){
            change = game[index];
            setShow(<CardAnswer rigthAnswer={rigthAnswer} gaming={gaming} game={change} length={length} index={index}/>);

        }else if(situation === 'answer'){
            setShow(<CardBorder gaming={gaming} game={change} length={length} index={index} color={color}/>);

        }else if(situation === 'answered'){

            index++;
            if(index === length) {
                finalGame();
            }else{
                change = game[index];
                setShow(<Card gaming={gaming} game={change} length={length} index={index}/>);
            }
        }
    }

    //const [answeredCorrect, setAnsweredCorrect] = useState(0);
    let answeredCorrect = 0;
    function rigthAnswer(){
        //setAnsweredCorrect(answeredCorrect + 1);
        answeredCorrect++;
    }

    function finalGame(){
        let result;
        answeredCorrect === length ? result='sucess' : result='fail';
        setShow(<FinalScreen message={finalMessage[result]} changeView={changeView}/>);
    }

    return(
        <div className="game">
            <Header />
            <div className="main">
                {show}
            </div>
        </div>
    )}
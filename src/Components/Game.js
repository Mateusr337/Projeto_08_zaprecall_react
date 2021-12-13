import Header from "./Header";
import Card from './Card';
import CardAnswer from './CardAnswer';
import CardBorder from './CardBorder';
import FinalScreen  from './FinalScreen';
import { useState } from "react";

import sad from '../assets/sad.png';
import party from '../assets/party.png';

var correct = 0;

export default function Game({game, input, updateInput}){

    const length = game.length;
    let index = 0;
    let change = game[0];
    const [show, setShow] = useState(<Card gaming={gaming} game={change} length={length} index={index}/>);

    function restartView(none){
        index = 0;
        change = game[0];
        setShow(<Card gaming={gaming} game={change} length={length} index={index}/>);
    }

     function rigthAnswer(){
         correct++;
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
 
     function finalGame(){
         
         let finalMessage = {
            fail: {
                title: `Putz..`, 
                text: `Você esqueceu ${length - correct} flashcards..Não desanime! Na próxima você consegue!`,
                emoji: sad
                },
                sucess: {
                    title: `PARABÉNS!`, 
                    text: `Você não esqueceu de nenhum flashcard ou cumpriu sua meta!`,
                    emoji: party
                }
            }

            let result;
            correct >= input? result='sucess' : result='fail';
            setShow(<FinalScreen correct={correct} game={game} message={finalMessage[result]} input={input} restartView={restartView} updateInput={updateInput}/>);
        }



    return(
        <div className="game">
            <Header />
            <div className="main">
                {show}
            </div>
        </div>
    )}
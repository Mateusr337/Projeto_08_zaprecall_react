import HomePage  from './Components/HomePage';
import Game from './Components/Game';

import './reset.css';
import './style.css';
import react from 'react';

const games = {
    jsx: [
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __.', answer: 'uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __.', answer: 'letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX.', answer: 'expressões'},
        {question: 'ReactDOM nos ajuda __.', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para__.', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __.', answer: 'passar diferentes informações para componentes'},
        {question: 'Usamos estado (state) para __.', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.'}
    ],
    javaScript: [
        {question: 'O que é javaScript?', answer: 'é uma linguagem de programação'},
        {question: 'Para que usamos JavaScript?', answer: 'Programar'}
    ]
}

var input = '';

export default function App(){

    function updateInput (text){
        input = text;
        setView(<HomePage onClick={changeView} input={input} updateInput={updateInput}/>)
    }

    const [view, setView] = react.useState(<HomePage onClick={changeView} input={input} updateInput={updateInput}/>);


    function changeView(selected, game) {
        const screens = {
            home: <HomePage onClick={changeView} input={input} updateInput={updateInput}/>,
            game: <Game game={games[game]} input={input} updateInput={updateInput}/>
        }
        setView(screens[selected]);
    }
    

    return(
        <>
            {view}
        </>
    )}

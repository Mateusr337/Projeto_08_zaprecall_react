import Header from "./Header";
import Card from './Card';
import CardAnswer from './CardAnswer';

export default function Game({game}){
    console.log(game)

    return(
        <div className="game">
            <Header />
            <div className="main">
                <Card game={game}/>
            </div>
        </div>
    )}
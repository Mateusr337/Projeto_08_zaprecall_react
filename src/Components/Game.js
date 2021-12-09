import Header from "./Header";
import Card from './Card';

export default function Game(){
    return(
        <div className="game">
            <Header />
            <div className="main">
                <Card color='white'/>
            </div>
        </div>
    )}
import Button from './Button';

export default function Buttons({onClick}){

    let cards = ["Praticar React"];

    return(
        <>
            {cards.map((card) => (
            <div className="buttons">
                <Button onClick={onClick}  text={card}/>
            </div>
            ))}
        </>
    )}
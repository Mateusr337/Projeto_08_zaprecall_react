import Button from './Button';

export default function Buttons({onClick}){

    let cards = [
        {nome: "Praticar React", show: 'jsx'},
        {nome: "Praticar JavaScript", show: 'javaScript'}
    ];

    return(
        <div className="buttons">
            {cards.map((card) => (
                <Button onClick={onClick} info={card}/>
            ))}
        </div>
    )}
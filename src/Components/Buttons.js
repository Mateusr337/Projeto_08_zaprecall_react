import Button from './Button';

export default function Buttons({onClick}){

    let cards = [
        {nome: "Praticar React (8)", show: 'jsx'},
        {nome: "Praticar JavaScript (2)", show: 'javaScript'}
    ];

    return(
        <div className="buttons">
            {cards.map((card, index) => (
                <Button key={index} onClick={onClick} info={card}/>
            ))}
        </div>
    )}
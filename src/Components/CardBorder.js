import icon from '../assets/arrow-undo-sharp.svg';

export default function CardBorder({game, gaming, length, index, color}){

    return (
        <div className="card" style={{border: `5px solid ${color}`}}>
            <header>
                <span>{game.question}</span>
                {index + 1}/{length}
            </header>
            <span className="text">{game.answer}</span>
            <footer className='footerCard'> <img onClick={() => gaming('answered', null)} src={icon} alt={'Question/answer'}/> </footer>
        </div>
    )}
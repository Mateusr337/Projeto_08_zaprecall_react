import icon from '../assets/arrow-undo-sharp.svg';

export default function Card({game, gaming, length, index}){

    return (
        <div className="card">
            <header>{index + 1}/{length}</header>
            <span className="text" style={{fontWeight: 700}}>{game.question}</span>
            <footer className='footerCard'> <img onClick={() => gaming('question', null)} src={icon} alt={'Question/answer'}/> </footer>
        </div>
    )}
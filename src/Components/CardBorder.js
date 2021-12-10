import icon from '/home/mateus/projetos/projeto_08_zaprecall_react/src/assets/arrow-undo-sharp.svg';

export default function CardBorder({game, gaming, length, indice, color}){

    return (
        <div className="card" style={{border: `3px solid ${color}`}}>
            <header>{indice + 1}/{length}</header>
            <span className="text">{game}</span>
            <footer className='footerCard'> <img onClick={() => gaming('answered', null)} src={icon} alt={'Question/answer'}/> </footer>
        </div>
    )}
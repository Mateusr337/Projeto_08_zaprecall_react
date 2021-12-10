import icon from '/home/mateus/projetos/projeto_08_zaprecall_react/src/assets/arrow-undo-sharp.svg';

export default function Card({game, gaming, length, indice}){

    return (
        <div className="card">
            <header>{indice + 1}/{length}</header>
            <span className="text">{game}</span>
            <footer className='footerCard'> <img onClick={() => gaming('question', null)} src={icon} alt={'Question/answer'}/> </footer>
        </div>
    )}
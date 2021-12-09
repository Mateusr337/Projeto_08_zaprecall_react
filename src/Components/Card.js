import icon from '/home/mateus/projetos/projeto_08_zaprecall_react/src/assets/arrow-undo-sharp.svg';

export default function Card({game}){

    return (
        <div className="card">
            <header>1/{game.length}</header>
            <span className="text">{game[0].question}</span>
            <footer className='footerCard'> <img src={icon} alt={'Question/answer'}/> </footer>
        </div>
    )}
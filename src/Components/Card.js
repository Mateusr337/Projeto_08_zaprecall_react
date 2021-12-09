import icon from '/home/mateus/projetos/projeto_08_zaprecall_react/src/assets/arrow-undo-sharp.svg';

export default function Card({color}){
    return (
        <div className="card" style={{border: `1px solid ${color}`}}>
            <header>1/8</header>
            <span className="anwser">O que é JSX?</span>
            <footer> <img src={icon} alt={'Mostrar resposta'}/> </footer>
        </div>
    )}
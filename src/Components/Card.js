import icon from '/home/mateus/projetos/projeto_08_zaprecall_react/src/assets/arrow-undo-sharp.svg';
export default function Card(){
    return (
        <div className="card">
            <header>1/8</header>
            <span className="anwser">O que é JSX?</span>
            <footer> <img src={icon} alt={'Mostrar resposta'}/> </footer>
        </div>
    )}
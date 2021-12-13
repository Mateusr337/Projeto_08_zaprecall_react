import Next from '../assets/next.png';

export default function Button({info, onClick}){

    return(
        <button onClick={() => onClick('game', info.show)} data-identifier="start-zap-recall">
            <span>{info.nome}<img src={Next} alt="next" /></span>
        </button>
    )
}
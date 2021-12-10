import Next from '../assets/next.png';

export default function FinalButton({text, changeView}){

    return(
        <button onClick={() => changeView('home', null)}>
            <span>{text}<img src={Next} alt="next" /></span>
        </button>
    )
}
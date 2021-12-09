import Next from '../assets/next.png';

export default function Button({text, onClick}){

    return(
        <button onClick={() => onClick()}>
            <span>{text}<img src={Next} alt="next" /></span>
        </button>
    )
}
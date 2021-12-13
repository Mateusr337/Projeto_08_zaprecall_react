import Next from '../assets/next.png';

export default function FinalButton({correct, action, text, parameter}){

    return(
        <button onClick={() => {action(parameter); correct='0'}}>
            <span>{text}<img src={Next} alt="next" /></span>
        </button>
    )
}
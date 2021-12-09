import Next from '../assets/next.png';

export default function Button({text}){
    return(
        <button>
            <span>{text}<img src={Next} alt="next" /></span>
        </button>
    )
}
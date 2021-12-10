
export default function Block({color, text, gaming}){
    return(
        <div className="block" style={{border: `2px solid ${color}`}} onClick={() => gaming('answer', color)}>
            <span>{text}</span>
        </div>
    )}
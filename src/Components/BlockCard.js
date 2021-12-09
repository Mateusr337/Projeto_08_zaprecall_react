
export default function Block({color, text}){
    return(
        <div className="block" style={{border: `2px solid ${color}`}}>
            <span>{text}</span>
        </div>
    )}
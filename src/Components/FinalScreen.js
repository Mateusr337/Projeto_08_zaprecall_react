import Button from "./Button";

export default function FinalScreen({message}){

    return(
       <div className="finalScreen">
        <span className="title">{message.title}</span>
        <span className="text">{message.text}</span>
       </div>
    )}
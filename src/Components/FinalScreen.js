import FinalButton from "./FinalButton";

export default function FinalScreen({message, changeView}){

    return(
       <div className="finalScreen">
        <span className="title">{message.title}</span>
        <span className="text">{message.text}</span>
        <FinalButton text={'Home'} changeView={changeView}/>
       </div>
    )}
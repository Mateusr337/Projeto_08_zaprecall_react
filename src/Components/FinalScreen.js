import FinalButton from "./FinalButton";

export default function FinalScreen({correct, message, restartView, updateInput, game}){

   let buttons = [
      {
         text: 'Tentar novamente', 
         action: restartView,
         parameter: ''
      },
      {
         text: 'Home',
         action: updateInput,
         parameter: ''
      }
   ];

    return(
      <div className="finalScreen">
         <div>
            <span className="title">{message.title}  </span>
            <img src={message.emoji} alt='Emoji sad/party' />
         </div>
         <span className="text">{message.text}</span>
         {buttons.map( (button, index) => (
            <FinalButton key={index} correct={correct} text={button.text} action={button.action} parameter={button.parameter}/>
         ))}
      </div>
    )}
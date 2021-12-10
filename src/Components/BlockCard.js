
export default function Block({color, text, gaming, rigthAnswer}){

    function clicked(){
        if(color === 'green' || color === 'yellow'){
            gaming('answer', color);
            rigthAnswer();
        }else{
            gaming('answer', color);
        }
    }

    return(
        <div className="block" style={{border: `3px solid ${color}`}} onClick={clicked}>
            <span>{text}</span>
        </div>
    )}
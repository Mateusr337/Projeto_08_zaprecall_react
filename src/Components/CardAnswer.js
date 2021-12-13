import Block from './BlockCard';

export default function CardAnswer({game, gaming, length, index, rigthAnswer}){

    const blocks = [
        {color: 'black', text: 'Aprendi agora'},
        {color: 'red', text: 'Não lembrei'},
        {color: 'green', text: 'Lembrei com esforço'},
        {color: 'yellow', text: 'Zap!'},
    ];

    return (
        <div className="card" data-identifier="flashcard">
            <header data-identifier="counter">
                <span>{game.question}</span>
                {index + 1}/{length}
            </header>
            <span className="text">{game.answer}</span>
            <footer className="blocks">
                {blocks.map((block, index) => (
                    <Block key={index} rigthAnswer={rigthAnswer} color={block.color} text={block.text} gaming={gaming}/>
                ))}
            </footer>
        </div>
    )}
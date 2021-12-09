import Block from './BlockCard';

export default function CardAnswer({game}){

    const blocks = [
        {color: 'black', text: 'Aprendi agora'},
        {color: 'red', text: 'Não lembrei'},
        {color: 'green', text: 'Lembrei com esforço'},
        {color: 'yellow', text: 'Zap!'},
    ];

    return (
        <div className="card">
            <header>1/{game.length}</header>
            <span className="text">{game[0].question}</span>
            <footer className="blocks">
                {blocks.map(block => (
                    <Block color={block.color} text={block.text}/>
                ))}
            </footer>
        </div>
    )}
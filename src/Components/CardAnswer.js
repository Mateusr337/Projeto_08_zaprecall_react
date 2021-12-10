import Block from './BlockCard';

export default function CardAnswer({game, gaming, length, indice}){

    const blocks = [
        {color: 'black', text: 'Aprendi agora'},
        {color: 'red', text: 'Não lembrei'},
        {color: 'green', text: 'Lembrei com esforço'},
        {color: 'yellow', text: 'Zap!'},
    ];

    return (
        <div className="card">
            <header>{indice + 1}/{length}</header>
            <span className="text">{game}</span>
            <footer className="blocks">
                {blocks.map(block => (
                    <Block color={block.color} text={block.text} gaming={gaming}/>
                ))}
            </footer>
        </div>
    )}
import HomePage  from './Components/HomePage';
import Game from './Components/Game';
import { useState } from 'react';

export default function App(){
    const [view, setView] = useState(<HomePage onClick={changeView} />);

    function changeView() {
        setView(<Game />);
    }

    return(
        <>
            {view}
        </>
    )}

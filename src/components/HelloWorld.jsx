import React, { useState } from 'react';

const HelloWorld = () => {
    const [ active, setActive ] = useState(true);

    const handlerClick = () => {
        setActive(!active);
    }

    return (
        <div>
            <button onClick={handlerClick}>Ocultar</button>
            { active && <h1>Hola Mundo Hooks</h1> }
        </div>
    );
}

export default HelloWorld;
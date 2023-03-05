import { useState } from 'react';

function RandomNumber() {
    const [ randomNum ] = useState(100);

    return (<div>
        <h1>{randomNum}</h1>
        <button>Generate new random number</button>
    </div>);
}

export default RandomNumber;
import { useState } from "react";
//Zadanie 3
function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount (count + 1 )}>Kliknij</button>
        </div>
    );
}

export default Counter;
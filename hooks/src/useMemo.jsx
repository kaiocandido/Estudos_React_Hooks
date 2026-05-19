import { useState, useMemo } from "react";

function UseMemoTest(){

    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");
    const doubleNumber = useMemo(() => {
        slowFunction(number);
    }, [number])

    return(
        <>
            <p>{number}</p>
            <input 
                value={text} onChange={(e) => setText(e.target.value)}
            ></input>
            <button onClick={() => setNumber(2)}>Increment</button>
            <p>text: {text}</p>
        </>
    )
}

const slowFunction = (num) => {
    console.log("SlowFunction is being called!!")
    for (let i = 0; i < 1000; i++){
        return num * 2;
    }
}


export default UseMemoTest;
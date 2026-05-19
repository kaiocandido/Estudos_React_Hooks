import { useEffect, useState } from "react";

function UseLayoutEffectTest(){

    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log(count);
    }, [count]);


    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </>
    )
}

export default UseLayoutEffectTest;
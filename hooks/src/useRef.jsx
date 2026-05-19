import { useEffect, useState, useRef } from "react";


function TesteUseRef() {

    const [name, setName] = useState("");

    const inputTesteRef = useRef();

    useEffect(() => {
        inputTesteRef.current = name;
    },[name])

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello! My name is {name}</p>
            <p>Add my name was {inputTesteRef.current}</p>
        </div>
    );
};

export default TesteUseRef;
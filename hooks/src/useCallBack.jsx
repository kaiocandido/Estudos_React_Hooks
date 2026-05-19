import { useState, useCallback } from "react";

import List from "./list";

function UseCallbackTeste(){

    const [text, setText] = useState("");
    const [resourceType, setResourceType] = useState("");

    const getItems = useCallback(async ()=> {
        console.log('getItems is being called!!');
        const response = await fetch (
            `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        const responseJson = await response.json();

        return responseJson;
    }, [resourceType]);

    return (
        <div>
            <input
                value={text} onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setResourceType("posts")}>Posts </button>
            <button onClick={() => setResourceType("comments")}>Comments </button>
            <button onClick={() => setResourceType("todos")}>Todos </button>

            <List getItems={getItems} />
        </div>
    )
}

export default UseCallbackTeste;
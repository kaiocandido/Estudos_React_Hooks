import { useState, useEffect } from "react";


function TesteUseffect() {

    const [resourceType, setResourceType] = useState("posts");

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    };


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json));
    }, [resourceType]);

    useEffect(() => {
        console.log("componentDidMount");
    }, []);

    useEffect(() => {
        return  () => {
            console.log("componentWillUnmount")
        };

    }, []);


    
    return (
        <div>
            <h1>{resourceType}</h1>
            <div>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("coments")}>Coments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
        </div>
    );
};

export default TesteUseffect;
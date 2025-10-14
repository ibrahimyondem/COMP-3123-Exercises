import { useState } from "react";

function Employee(){
    let [x,setX] = useState(10);
     let [name,setName] = useState("Patel");

    const addX = () => {
        setX = (x + 1)
        console.log(`X: ${x}`);
    }

     const onNameChanged = (e) => {
        e.preventDefault();
        console.log(e.target.value, e.target.name);
        setName(e.target.value);
    }
    return(
        <div>
            <h1>Employee State Management</h1>
            X: {x}
            <button onClick={addX}> Add 1 to X</button>
            Name: {name}
            <input type="text" name="txtName" onChange={onNameChanged}></input>
        </div>
    )
}

export default Employee;
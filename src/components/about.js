import User from "./User";
import UserClass from "./UserClass";
import { useState } from "react";
const About=()=>{
    const [name,setName]=useState("");
    onchange=(event)=>{
        setName(event.target.value)
    }
    handleSubmit=(event)=>{
        alert("form submitted"+name);
        event.preventDefault();
    }
   return(
    <form onSubmit={handleSubmit}>
        <label>Name
        <input type="text" value={name} onChange={onchange}></input>
        </label>
        <input type="submit" value="submit"/>
    </form>

        // <div>
        //     <User name={"Sumit Lokhande"}/>
        //     <UserClass name={"Sumit Lokhande class"}/>
        // </div>
   )
}

export default About;

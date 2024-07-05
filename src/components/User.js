import { useState } from "react";

const User=(propes)=>{
    const[count,setCount]=useState(5);
    return(
        <div className="user">
            <h1>Count={count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>count increse</button>

            <h1>{propes.name}</h1>
            <h3>mumbai</h3>     
        </div>
    )
}

export default User;
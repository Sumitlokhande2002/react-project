import ItemListOther from "./ItemListOther";
import { useState } from "react";

const OtherCategory=({data})=>{

    const[showItems,setShowItems]= useState(false)

    const handleClick=()=>{
        setShowItems(!showItems)}
    
    return(
        <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "> 
    <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title}</span>
        <span className="cursor-pointer" onClick={handleClick}>👇</span>       
        </div>
       {showItems&&<ItemListOther otherItems={data.categories}/>}
    </div>
</div> 

    )
}

export default OtherCategory;
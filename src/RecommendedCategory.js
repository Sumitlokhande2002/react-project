import ItemList from "./components/ItemList";
import { useState } from "react";

const RecommendedCategory=({data})=>{
    const[showItems,setShowItems]= useState(false)

    const handleClick=()=>{
        setShowItems(!showItems)
    }
    // console.log(data);
    return(
        <div>
            {}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "> 
        <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="cursor-pointer"onClick={handleClick}>👇</span>       
            {}
            </div>
           {showItems&& <ItemList items={data.itemCards}/>}
        </div>
    </div> 
    )
}
export default RecommendedCategory;
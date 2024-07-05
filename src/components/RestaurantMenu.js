import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurant from "./useRestaurant";
import RecommendedCategory from "../RecommendedCategory";
import OtherCategory from "./OtherCategory";

const RestaurantMenu=()=>{
    

    // console.log(params);
    const {resId}=useParams();
    const resInfo=useRestaurant(resId)   ;
  

    
    if(resInfo===null) return <h1>loading....</h1>;
        const {name,cuisines}=resInfo?.cards[2]?.card?.card?.info;

        const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

        // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const categories1=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["title"]==="Recommended")   
        // console.log(categories1)
        
        const categories2=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        console.log(categories2)
        return(
    <div className="text-center">
     <h1 className="font-bold my-6 text-2xl">{name}</h1>
     <p className="font-bold">
        {cuisines.join(",")}
     </p>
     {categories1.map((category)=>(<RecommendedCategory key={category?.card?.card?.title} data={category?.card?.card}/>))}
     {categories2.map((category)=>(<OtherCategory key={category?.card?.card?.title} data={category?.card?.card}/>))}

    
    </div>   
    )
}
export default RestaurantMenu;
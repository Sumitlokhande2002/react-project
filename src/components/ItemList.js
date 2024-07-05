import { useDispatch } from "react-redux"
import { addItem } from "../../utils/cartSlice"
const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleCartItems=(item)=>{
        dispatch(addItem(item))

    }
 return(
    <div>
        {items.map((item)=>(
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "key={item.card.info.id}>
        <div className="w-9/12"   >
            <div className="py-2">
            <span className="font-bold">  {item.card.info.name}</span>
            <span className="font-bold">-₹ {item.card.info.price/100||item.card.info.defaultPrice/100}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
        </div>
                <div className="w-3/12 ">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.card.info.imageId} className="rounded-2xl" />
                <div className="">
                <button className="ml-10 mt-2 bg-white rounded-lg p-1 px-2 font-bold text-green-500 border border-solid border-green-500"   onClick={()=>handleCartItems(item)
                }>
                Add +
                </button>
                </div>
                </div>
            </div>
            )

        )}
    </div>
 )
}
export default ItemList;
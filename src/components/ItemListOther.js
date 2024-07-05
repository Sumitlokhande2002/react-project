

    const ItemListOther=({otherItems})=>{
        console.log(otherItems)
     return(
        <div>
        {otherItems.map((otherItems)=>(
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "key={otherItems.itemCards[0].card.info.id}>
        <div className="w-9/12"   >
            <div className="py-2">
            <span className="font-bold">  {otherItems.itemCards[0].card.info.name}</span>
            <span className="font-bold">-₹ {otherItems.itemCards[0].card.info.price/100||otherItems.itemCards[0].card.info.defaultPrice/100}</span>
            </div>

            <p className="text-xs">{otherItems.itemCards[0].card.info.description}</p>
        </div>
                <div className="w-3/12 ">
                <div className="absolute ">
                <button className=" ml-[2.9rem] mt-[7.3rem] bg-white rounded-lg p-1 px-2 font-bold text-green-500 border border-solid border-green-500"   onClick={()=>handleCartItems(item)
                }>
                Add +
                </button>
                </div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+otherItems.itemCards[0].card.info.imageId} className="rounded-2xl" />
                </div>
            </div>
            )

        )}
    </div>
     )
    }
    export default ItemListOther;

    
import ItemList from "./ItemList";
import { useSelector,useDispatch} from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
  
    const handleCart = () => {
      dispatch(clearCart());
    };
  
    return(
        <div className="w-6/12 m-auto text-center">
            <h1 className="w-6/12 m-auto text-center font-bold text-2xl">Cart</h1> 
            <div>  
            <button className="bg-black text-white font-bold rounded-lg p-2 m-2" onClick={handleCart}>Clear Cart</button> 
            </div>                                        
                <ItemList items={cartItems} />
        </div>
    )

}

export default Cart;
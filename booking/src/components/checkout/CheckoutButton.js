import classes from "./CheckoutButton.module.css";
import { useNavigate } from "react-router-dom";

const CheckoutButton = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.book}>
                <button onClick={()=> navigate("/checkout")}>Checkout</button>
            
        </div>
    )
}
export default CheckoutButton;

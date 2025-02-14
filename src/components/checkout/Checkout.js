import './Checkout.css'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Checkout = () => {

    // const history = useNavigate();

    const vipAmount = useSelector((state) => state.vip.amount);
    const vipSeat = useSelector((state) => state.vip.seat);
    const premiumAmount = useSelector((state) => state.premium.amount);
    const premiumSeat = useSelector((state) => state.premium.seat);
    const executiveAmount = useSelector((state) => state.executive.amount);
    const executivemSeat = useSelector((state) => state.executive.seat);
    const movieName = useSelector((state) => state.vip.movieName);

    const onClickHandler = () => {
            alert(`Your Ticket Has Successfully Booked Enjoy The Movie.`)

    }
    return (
        <div className='div'>
            <main className='main'>
            <h2 className='h2'>Your Booking Details</h2>
                <h3 className='h3'>{movieName}</h3>
                <p className='p'><span>SEAT NO:</span> {vipSeat}{premiumSeat}{executivemSeat} </p>
                <p className='p'><span>TOTAL AMOUNT</span>:{parseInt((vipAmount+premiumAmount+executiveAmount))}</p>
                <button onClick={onClickHandler} className='btn'>Book Now</button>
            </main><br/>
            <NavLink to='/'><button className='btn1'>Go To Home</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink to="/booking">
                <button className='btn1'>Go back</button>
            </NavLink>
        </div>

    )
}

export default Checkout;

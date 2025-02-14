import classes from "./Header.module.css";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import CheckoutButton from "../checkout/CheckoutButton";
const Header = () => {
    return (
        <div className={classes.header}>
        <header>
            <h1>Ticket Booking Page</h1>
            <p>Book your tickets here</p>
        </header>
        <section>
        <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <CheckoutButton/>
            </section>
        </div>
    )

}
export default Header;

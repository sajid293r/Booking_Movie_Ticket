import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { vipActions } from "../../store/storeOne";
import MoviesData from "../../store/MoviesData"

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const movieClickHandler = (movieName) => {
        dispatch(vipActions.updateName(movieName));
        navigate("/booking")
    }


    const movieCards = MoviesData.map((item, index) => {
        return (
            <div onClick={() => movieClickHandler(item.title)} key={index}>
                <img src={item.poster} alt="img" />
                <h4>{item.title}</h4>

            </div>
        )
    })

    return (
        <>
        <div style={{backgroundColor:'black',overflow:'hidden'}}>
        <h1 style={{color:'gold',fontSize:'60px',fontFamily:'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',letterSpacing:'9px'}}>Easy Tickets</h1>
        <h4 style={{color:'gold'}}>Select Your favourite Movie</h4>
        <main className={classes.cards}>
            {movieCards}
        </main>
        </div>
        </>
    )
}

export default HomePage;
import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";
import CheckoutButton from "./components/checkout/CheckoutButton";
import { BrowserRouter,Routes, Route } from "react-router-dom";

const App = () => {
  return (
        <BrowserRouter> 
          <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/booking" element={<Header />}/>
            <Route path="/sectionone" element={<SectionOne />}/>
            <Route path="/sectiontwo" element={<SectionTwo />}/>
            <Route path="/sectionthree" element={<SectionThree />}/>
            <Route path="/checkoutbutton" element={<CheckoutButton />}/>
          <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      )

};
export default App;

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const style = {
//   middle: {
//     display: 'flex',
//     alignItems: 'center',
//     border: '2px solid black',
//     paddingLeft: '95px',
//     width: '180px',
//     marginLeft: '40vw'
//   },
//   h1: {
//     marginLeft: '44vw'
//   },
//   input: {
//     marginLeft: '35vw',
//     width: '30vw',
//     border: '2px solid red',
//     height: '30px'
//   },
// }

// const App = () => {
//   const [data, setData] = useState([])
//   const [set, setSet] = useState("")


//   useEffect(() => {
//     axios.get("https://dummy.restapiexample.com/api/v1/employees")
//       .then(res => setData(res.data.data))
//       .catch(error => console.log("error", error))
//   }, [])

//   const Filter = data.filter((item) => {
//     return item.employee_name.toLowerCase().includes(set.toLowerCase())
//   })
   
 
//   return (
//     <>
//       <div style={{ ...style.container }}>
//         <h1 style={{ ...style.h1 }}>Search Here</h1>
//         <input type="text" value={set} onChange={(e) => setSet(e.target.value)} style={{ ...style.input }} /><br />
//         {Filter.map((item,index) => {
//           return (
//             <>
//               <ul style={{ ...style.middle }}>
//                 <li key={item.index}>{item.employee_name}</li><button >delete</button>
//               </ul>
//             </>

//           )
//         })}
//       </div>
//     </>
//   )
// }
// export default App;


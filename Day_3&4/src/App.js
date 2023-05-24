
// const App=()=>{
//   return (
//     <div>
//       Hello react js...
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Apple } from './Apple'
import { Notfound } from './Notfound';
import { globalstyle } from './constant';
import logo from "./logo.svg";
// import {siteLogo} from "../public/logo192.png";
const App = () => {
  return (
    <>
     {/* <img src={logo} alt='app logo'/> */}



      <div  style={{
        ...globalstyle.navbar,
      }}>

        <Link to="/" style={{
          marginLeft: 5,
        }}>
          Home
        </Link>
        <Link to="/apple" style={{
          marginLeft: 10,
        }}>
          Apple
        </Link>
        <Link to='Applet' style={{
          marginLeft: 10,
        }}> Applet </Link>
      </div><Routes>
        <Route path='/' element={<Homepage />}> </Route>
        <Route path='apple' element={<Apple />}> </Route>
        <Route path='*' element={<Notfound />}> </Route>
      </Routes>

    </>
  )
}

export default App;

import React,{useState} from 'react';
import './App.css';
import Clickpage from './Navfotter.js/Clickpage';
import Fotter from './Navfotter.js/Fotter';
import Fristpage from './Navfotter.js/Fristpage';
import Home from './Navfotter.js/Home';
import Innerpage from './Navfotter.js/Innerpage';
import Kidsworld from './Navfotter.js/Kidsworld';
import Movies2 from './Navfotter.js/Kidsworld';
import Mymovies from './Navfotter.js/Mymovies';
import Navbar from './Navfotter.js/Navbar';
import Registerform from './Navfotter.js/Registerform';
import Shows from './Navfotter.js/Shows';
import Siginform from './Navfotter.js/Siginform';
import Slider from './Slider';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
 import Video from './Navfotter.js/Video'
import Searchpage from './Navfotter.js/Searchpage';
import Saved from './Navfotter.js/Saved';
import Contaxt from './Navfotter.js/Contaxt';




function App() {
   
//  const [data,setdata]=useState([])
  return (
    <div className="App">
   <header className="App-header">
  {/* <Contaxt.Provider value={{data,setdata}}> */}
 <Router>
  <Routes>
   <Route path='/' element={<Fristpage/>} />
   <Route path='siginform' element={ <Siginform/>} />
   <Route path='registerform' element={<Registerform/>} />
    <Route path='home' element={<Home/>} />
    <Route path='mymovies' element={<Mymovies/>}/>
    <Route path='shows' element={<Shows/>} />
    <Route path='Kidsworld' element={<Kidsworld/>} />
    <Route path='clickpage/:Moviename' element={<Clickpage/>} />
    <Route path='search' element={<Searchpage/>} />
    <Route path='video' element={<Video/>} />
    <Route path='saved' element={<Saved/>} />
  </Routes>
</Router> 
{/* </Contaxt.Provider>    */}


      </header>
 
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import Home from "./Home";
import View from "./View";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Add from "./Add";
import Prac from "./Prac";
import Protected from "./Protective";
import Login from "./Login";

import img from './gg.jpg';
import { useDataContext } from "./DataContext";
import Reduxx from "./Redux";



function App() {


const {user}=useDataContext();

  return (
    
   
      <Router>
        <div className="App">
        <div className="background-image-container">
            <img src={img} alt="background" className="background-image" />
          </div>
          {user.token === 1 && <Navbar />}

          <div className="contect">
            <Routes>
                            <Route element={<Navbar/>}/>
              <Route exact path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route element={<Navbar/>}/>

              <Route element={<Protected />}>
                <Route path="/home" element={<Home />} />
                <Route path="/view/:id" element={<View />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Add />} />
                <Route path="/Prac" element={<Prac />} />
                <Route path="/Rdx" element={<Reduxx />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    
  );
}

export default App;

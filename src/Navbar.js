import { NavLink } from "react-router-dom";
import { useDataContext } from "./DataContext";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { user } = useDataContext();
  const {setUserData}=useDataContext();
  const [N, setN] = useState("Login");
  useEffect(() => {
    
    if (user.token===0) {
      setN("Login");
    }
    else
    {
      setN(user.Name  + "  / Logout")
    }
    
  }, [user]);
  const handleLogout = ()=>{
    const state = {
      Name: " ",
      token: 0, 
    };

    setUserData(state);
    
  }

  return (
    <div className="Navbar">
      <h2>NOBORDERZ </h2>
      <div className="Links">
        <nav>
          <NavLink to="/home">Home</NavLink>

          <NavLink to="/add">Add</NavLink>
          <NavLink to="/Prac">Weather</NavLink>
          <NavLink to="/Rdx">Redux</NavLink>
          <NavLink onClick={handleLogout} to="/Login">{N}</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

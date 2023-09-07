import { useState } from "react";
import { useDataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const { setUserData } = useDataContext();

  const NAV = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const state = {
      Name: name,
      token: 1, 
    };

    setUserData(state);
   
    NAV("/home");
  };

  return  (
    
    <div className="Add">
      <form onSubmit={handleLogin}>
        <h2>UserName</h2>
        <input
          type="text"
          value={name}
          placeholder="Username...."
          onChange={(e) => setName(e.target.value)}
        />

        <h2>Password</h2>
        <input type="password"  placeholder="Password...." />
        <br />
        <button>Login</button>
      </form>
    </div>
    
      
  );
};

export default Login;

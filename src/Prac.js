import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
const Practice = () => {
  const [temp, setTemp] = useState(1);
  const {count} = useSelector((state) => state.counter);
//  const  APII = async ()=>{
//  let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//  console.log(res.data);
 



//  }
  return (
    <div className="Practice">
      <div className="Inside">
 {count}
        <h4> {temp}°°C</h4>
        <button onClick={() => setTemp(temp + 1)}>+</button>
        <button onClick={() => setTemp(temp - 1)}>-</button>
      

       
      </div>
    </div>
  );
};

export default Practice;

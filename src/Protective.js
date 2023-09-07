import {  Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDataContext } from "./DataContext";
// import { useEffect } from "react";

const Protected = () => {
  const { user } = useDataContext();
  // useEffect(()=>{
  //  if( user.token !== 1){
  //   redirect('/Login')
  //  }
  // },[])

  // const NAV = useNavigate();

  return user.token === 1 ? <Outlet /> : <Navigate to="/Login"/>;
};

export default Protected;

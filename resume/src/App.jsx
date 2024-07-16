import React, { useEffect, useState } from "react";
import Resume from "./Component/Resume/Resume";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";

const App = () => {
  const [user, setUser]= useState(null)

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token) {
      setUser({token})
    }
  },[])
  return (
    <>
      {user ? (
        <>
          <Navbar />
          <Resume />
        </>
      ) : (
        <Login/>
      )}
    </>
  );
};

export default App;

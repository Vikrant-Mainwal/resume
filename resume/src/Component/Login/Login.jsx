import React, { useState } from "react";
import InputField from "../Global/InputField";
import SubmitButton from "../Global/SubmitButton";
import axios from "axios";

const Login = () => {

  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [token,setToken] = useState("")

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async(e)=>{
    e.preventDefault();
    let newUrl;
    if (currState == "Login") {
      newUrl ="http://localhost:5000/user/login";
    } else {
      newUrl ="http://localhost:5000/user/register";
    }
    console.log(newUrl);
    console.log(formData);
    try {
      const res = await axios.post( newUrl,formData)
      console.log(res,"this is a response");

      if (res.data) {
        console.log(res.data) 
        
        if (res.data.success) {
          const token = res.data.token;
          const name = res.data.name
          console.log("Token recieved",token);
          console.log(name);

          if (token) {
            setToken(token);
            localStorage.setItem("token",token);
            // setUser(user)
            console.log("token store in localstorage");

          } else {
            console.error("Token is undefined or null")
          }
        }      else{
        console.error("Status is false or undefined");
      }
      }else{
        console.error("Status is false or undefined");
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials")
    }
  }
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center">
      <form className="flex flex-col w-[400px] h-[400px] shadow-lg rounded-lg bg-slate-300" onSubmit={submitHandler}>
        <div className="text-[22px] font-semibold m-auto ">Welcome,</div>
        <div className=" flex flex-col gap-[10px] justify-end items-end m-auto">
          {currState == "Login"?(<></>):(<InputField fieldName="Name" type={"text"} name={"name"} value={formData.name} onChange={handleInputChange}/>)}
          <InputField fieldName="Email" type={"email"} name={"email"} value={formData.email} onChange={handleInputChange}/>
          <InputField fieldName="Password" type={"password"} name={"password"} value={formData.password} onChange={handleInputChange}/>
        </div>
        <div className=" m-auto ">
          <SubmitButton>{currState === "Sign-Up" ? "Sign up" : "Login"}</SubmitButton>

        </div>
        {currState === "Login" ? (
          <p className="m-auto">
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign-Up")}>Sign-Up</span>
          </p>
        ) : (
          <p className="m-auto">
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";

function LoginCheck() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [errormesage, setErrorMessage] = useState(false);
  const [displayMessage,setDisplayMessage] = useState("");

  function handleChange(event) {
   
    const { name, value } = event.target; 

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handelLogin(){

    const validUsername = "tharun";
    const validPassword = "tharun@123";

    if(userDetails.userName ==="" || userDetails.password===""){
        setErrorMessage(false);
        setDisplayMessage("Enter the details")
    }
    else if (
      userDetails.userName === validUsername &&
      userDetails.password === validPassword
    ){
        setErrorMessage(true);
        setDisplayMessage("Welcome");
       

    }
    else{
        setErrorMessage(false); 
        setDisplayMessage("Invalid username or password!");
    }
  }

  return <>
  <div className="maindiv"> 
    <h4> IRCTC LOgin Page</h4>
    <div>
        <input
          name="userName"
          type="text"
          value={userDetails.userName}
          onChange={handleChange}
        />
    </div>

    <div className ="pwd">
        <input
          name="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />
    </div>
  </div>
  <div>
    <button onClick={handelLogin}> Login </button>
  </div>

  <div className = "dispaly">
       
        {(errormesage || displayMessage !== "") && (
            <p> {displayMessage} </p>
        )}
  </div>

  </>;
}

export default LoginCheck;
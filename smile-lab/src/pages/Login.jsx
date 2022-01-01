import React,{useContext,useState} from 'react';
import {useHistory} from "react-router-dom";
// import "./login.css";
import {UserContext} from "../App";


// function isuser(user,dispatch) {
//   if(user){
//     dispatch({type:"USER",payload:true})
//     console.log("This is perfect")
//   }
//   else{
//     dispatch({type:"USER",payload:false})
//     console.log("This is also ok");
//   }
// }

// function iamgood(state){
//   console.log(state)
// }
const Login = () =>{
  const {state, dispatch} = useContext(UserContext);
  const history = useHistory() 

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const userLogin = async(e) => {
      e.preventDefault();

      const res = await fetch('http://localhost:5000/api/users/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          username,
          password
        })
      });

      const data = res.json();
      if(res.status ===400 || !data){ 
        window.alert("Login Unsuccessful")}
      else{ window.alert("Login Successful")
    history.push('/');};
    }

    return(
        <React.Fragment>
          {/* {isuser(user,dispatch)}
          {iamgood(state)} */}
            <div className="container-sm my-5  page-fade">
        <h1>Login</h1>
        <div>
        <div class="formdiv">
        <form method="POST">
  <div class="form-group col-md-6">
    <label for="username" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm">
      <input type="text" class="form-control" id="username" placeholder="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="password" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm">
      <input type="password" class="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" onClick={userLogin}>Log in</button>
    </div>
  </div>
        </form>
        </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Login;




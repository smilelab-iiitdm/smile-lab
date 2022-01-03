import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Logout = () => {
    //Using Promises instead of async 
    const history = useHistory();
    useEffect(() => {
            fetch('/api/users/logout',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "content-type":"application/json"
                },
                credentials: "include"
                
            }).then((res) => {
                history.push("/login");
                if(res.status !== 200)
                 {
                     const error = new Error(res.error);
                     throw error;
                 }
            }).catch((err) => {
                console.log(err);
            })
    });

    return (
        <React.Fragment>
            <br></br>
            <h1>User Logged out</h1>
            <br></br>
        </React.Fragment>
    )
}

export default Logout;

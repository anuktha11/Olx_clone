import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
 import './Login.css';
 import {Link, useNavigate } from 'react-router-dom'; // Updated import statement
 

 function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { firebase } = useContext(FirebaseContext);
   const navigate = useNavigate(); // Replaced useHistory with useNavigate
 
   const handleLogin = (e) => {
     e.preventDefault();
     firebase.auth().signInWithEmailAndPassword(email, password)
       .then(() => {
         navigate('/');  
       })
       .catch((error) => {
         alert(error.message);
       });
   }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="data:image/png;base64,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" alt="OLX Logo"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/Signup">
        <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;

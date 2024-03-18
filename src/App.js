import React,{useContext,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'

import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post  from './store/PostContext';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
     setUser (user)
    })
  })
  return (
    <div className="App">
      <Post>
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/view" element={<ViewPost/>} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;

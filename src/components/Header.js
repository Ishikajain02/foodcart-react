 import {useState} from 'react';
 import { Link } from 'react-router-dom';  
 
 const Tittle = () =>{
   
    return(
        <>
        
        <img  className ="logo" alt = "text" src = "https://assets.materialup.com/uploads/578c1723-1046-4fb9-b068-10715210d08d/preview.jpg"/>
        
        
    </>
    )
}
const Header = () =>{
    console.log("hi from header")
    const[IsLoggedIn,setIsLoggedIn] = useState(true);
    return(
    
    <div className ="header">
    
    <Tittle />
    <div className = "nav-items">
   <ul >
    <li><Link to="/">Home</Link></li>
    {/*<li><a href ="/about">About Us</a></li>*/}
    <li>    <Link to ="/about">About Us</Link></li>
    <li><Link to="/cart">Cart</Link></li>
    <li> <Link to ="/contact">Contact Us</Link></li>
    <li><Link to ="/instamart">Instamart</Link></li>
   </ul>
    {(IsLoggedIn) ? <button onClick={()=> setIsLoggedIn(false)}>Login</button> : <button onClick={()=> setIsLoggedIn(true)}>Logout</button>}
    </div>
    </div>
    )
}
export default Header;
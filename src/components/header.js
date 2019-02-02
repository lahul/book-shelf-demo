import React,{Component} from 'react';
import classes from '../css/style.css';



const Header = (props) =>{
    return (
        <header>
        <h1 className={classes.logo} onClick={()=>{console.log("Hi")}}>Logo</h1>
        <input type="text"  onChange={props.keywords}/>   
    </header>
    )
}

export default Header;
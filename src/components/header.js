import React,{Component} from 'react';
import '../css/style.css';



class Header extends Component{

    state ={
        keywords : "hello",
    }


    changeText = (v) =>{
       this.setState({
           keywords: v.target.value
       })
    }
    
    render(){
        console.log(this.state.keywords);
    return (<header>
        <h1 className="logo" onClick={()=>{console.log("Hi")}}>Logo</h1>
        <input type="text"  onChange={this.changeText}/>
        <div>{this.state.keywords}</div>
    </header>
    )
}
}

export default Header;
import React from "react";

class UserClass extends React.Component{
   constructor(props){
    super(props)
    this.state={
        userInfo:{
            name:"sdsdasd",
        }
    }
   }

   async componentDidMount(){
       const  data=await fetch("https://api.github.com/users/Sumitlokhande2002");
        const json=await data.json();
    console.log(json)
    this.setState({userInfo:json,})


}
    render(){

        return(
            <div className="userClass">
            <h1>{this.state.userInfo.login}</h1>
            </div> 
            )
    }
}

export default UserClass
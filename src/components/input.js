import React from "react";


function Input(){
// when using state, need to think of what the state would be showing.
// what is it doing, right now we are using password, and setPassword as this is what we want the state to represent.
// password is the variable, what the user sees, and setPassword is the function
const [inputPassword, setInputPassword] = React.useState("")

return (
       <div>
           <p>Enter Password ***** </p>
           <input 
        //    updating state on an onChange event
        // when using inputs onChange is just what you need to know
           onChange = {(event)=>{
               setInputPassword(event.target.value);

}}

      value = {inputPassword}/>
      {/* below describes if password length is equal to what the 
      user types the output will either be password to short ot too long */}
      <PasswordWarning passwordLength={inputPassword.length}/>
      <br />
{/* Right now this is one way input binding, {inputPassword} is bound to inputPassword in state, this is also a control component*/}
       <button
       onClick = {()=>{setInputPassword("")}}
       > Clear Password </button>
       
       </div>
)
}

function PasswordWarning (props) {
    if(props.passwordLength < 5){
    return <p>Password to short </p>
    } else {
        return <p>Password too long</p>
    }
    
    
}
export default Input
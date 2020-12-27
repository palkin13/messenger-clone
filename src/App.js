import React, {useState , useEffect} from "react";
import "./App.css";
import Message from "./Message";
import {FormControl,Input} from "@material-ui/core";
import {db} from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from '@material-ui/core';

export default function App() {

const [input , setInput] = useState("");
const [messages , setMessages] = useState([
  // {username : "Palkin" , message : "helloo!!"},
  // {username : "Jayant"  , message : "Byeeee!!"}
]); // This is used to store messages
const [username , setUsername] = useState("");

// console.log(input);
// console.log(messages);


useEffect(() => {
//runs once when the app component loads
db.collection('messages')
.orderBy('timestamp' , 'desc')
.onSnapshot(snapshot => {
setMessages(snapshot.docs.map(doc => ({id : doc.id , message : doc.data()})))
})
}, [] ) // listener in listener {useEffect >>>> onSnapshot}


useEffect(() => {
setUsername(prompt("Please Enter Your Name!"))
}, [])



const sendMessages = (event) => {
// All the logic to send message goes here.
event.preventDefault();
db.collection('messages').add({
  message : input,
  username : username,
  timestamp : firebase.firestore.FieldValue.serverTimestamp()
})
setMessages([...messages , {username : username , message : input}]);
setInput('');    // To clear n dosn't show previous messages
}




  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt= "messenger-clone"/>
      <h1>Messenger Clone <span role="img" aria-label={'rocket'}>🚀</span></h1>
      <h1>Welcome {username} </h1>

      <form className="app_form">
      <FormControl className="app_formControl">
       { /* input fields */ }
        {/* <InputLabel>Enter a message....</InputLabel> */}
        <Input className="app_input" placeholder= "Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>

        { /* buttons */ }
        <IconButton className="app_iconButton" disabled={!input}
          onClick={sendMessages} type="submit" color="primary" variant="contained">
          <SendIcon />
        </IconButton>

        {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>Send Message </Button> */}
     
      </FormControl>
      
      </form>
     

    <FlipMove>
    { /* messages themselves */ }
      
      {
        messages.map( ({id , message}) => (
          <Message key = {id}
           username = {username}
            message = {message} />
        ))
      }
      
    </FlipMove>
      
 

     

     

     
     
    </div>
  );
}

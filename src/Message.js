import React , {forwardRef} from "react";
import "./Message.css";
import { Card , CardContent , Typography} from "@material-ui/core";


const Message = forwardRef(({username , message} , ref) => {

const isUser = username === message.username

return(
 <div ref = {ref} className={`message ${isUser &&  `message_user`}`}>
  <Card className={isUser ? "message_userCard" : "message_guestCard"}>
    <CardContent> 
      <Typography 
          color ="white"
          variant = "h5"
          component = "h2" >  
 {/* If we use it dont show our name just show guest names */}
{!isUser && `${message.username || 'Unknown User'} : `}{message.message}
      </Typography>

    </CardContent> 
  </Card>
 
 </div> 
)
}) 

export default Message;

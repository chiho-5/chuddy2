import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const BotRedirect = ([ url, message]) => {
  return(
  <div>
  <a href={url} target="_blank">
    {message}
 </a>
</div>
); };

const CHATBOT_THEME = {
  background: "#FFFEFC",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColot: "#FFBFB5",
  userFontColor: "#fff"
  };
     
 const ChatBotHelper = () => {
   const steps = [
     {
       id: "1",
       message: "hi, I'm chuddy",
       trigger: "2"
     },
     {
       id: "2",
       message: "Think of me as a friend",
       trigger: "3"
      },
     {
       id: "3",
       message: "I'll love to work with you",
       trigger: "4"
      },
     {
       id: "4",
       options:[
         {value: 1,label: "sign up",trigger:"5"},
         {value: 2,label: "Sign in", trigger:"6"}
        ]
       },
    {
     id: "5",
      component: (
        <BotRedirect
          message="Get started"
          url="https://lucasbassetti.com.br/react-simple-chatbot/#/docs/previous-value"
        />
      ),
      trigger: ""
    },
    {
      id: "6",
      component: (
        <BotRedirect
          message="returning customer"
          url="https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot"
        />
      ),
      trigger: ""
    }
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;

       
     
       
  

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      padding: 0px;
      margin: 0px;
      outline: 0px;
      overflow-x: hidden;
      box-sizing: border-box;
       font-family:'Barlow',sans-serif;  
    
  }
  
  html,body, #root{
      height: 100vh;
      width: 100vw;
  } 
   
  *,button,input{
       border: none;
               
  }  
`;

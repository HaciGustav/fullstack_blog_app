import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
*::-webkit-scrollbar {
  width: 15px;
  height: 90%;
 
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f15c; 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background: #36465d29; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #36465d; 
}
#root{
    min-height: 100vh;
    background: rgb(0,194,255);
background: linear-gradient(90deg, #00c3ff52 26%, #00fffb53 55%, #007bff52 100%);
    /* background-color: #ddd; */
}

`;

export default GlobalStyle;

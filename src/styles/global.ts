import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px) {
        font-size: 93.76%;
    }
    @media (max-width: 1080px) {
        font-size: 87.6%;
    }
}
body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter';

    
}
body input, textarea, button{
    font-family: 'Inter';
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
} 
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
a{
    text-decoration: none;
     color: black;
}
ul, li{
    list-style: none;
}
`
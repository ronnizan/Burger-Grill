import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';


export const Overlay = styled.div`
position: fixed; 
display: flex; 
align-items: center;
justify-content: center;
width: 100%; 
height: 100%; 
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); 
z-index: 20000; /* Specify a stack order in case you're using a different order for other elements */
`

import styled from 'styled-components'


const Input = styled.input`

background: white;
color: ${props => props.color};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;

border: 1.5px solid ${props =>{ 
    
    switch(props.warning){
    case "success":
        return "#00ff00";
        break;
    case "warning":
        return "orange";
        break;
    case "error":
        return "red";
        break;
    default:
        return "black";
    }
}};

border-radius: 3px;
`;
export default Input;
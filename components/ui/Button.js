import styled from 'styled-components'


const Button = styled.button`

background: ${props => props.primary ? props.color : "white"};
color: ${props => {
    
    if(props.primary){
        return "white";
    }
}
};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid ${props => props.color};
border-radius: 3px;


`
export default Button;
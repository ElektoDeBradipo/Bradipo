import styled from 'styled-components';
import Input from './ui/Input';

const FieldInput = (props) => (
    <div>
        <label for={props.title}> {props.title} : <Input type={props.type} id={props.title}></Input></label>
    </div>
);

export default FieldInput;
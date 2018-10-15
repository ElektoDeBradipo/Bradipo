import styled from 'styled-components';
import Input from './ui/Input';

const FieldInput = (props) => (
    <div>
        <label htmlFor={props.title}> {props.title} : <Input warning={props.warning} onChange={props.onChange} type={props.type} name={props.title} id={props.title}></Input></label>
    </div>
);

export default FieldInput;
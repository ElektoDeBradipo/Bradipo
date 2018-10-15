
import Button from './ui/Button'
import Input from './ui/Input'
import FieldInput from './FieldInput';


const Signup = () =>{
    return (<div>
        <Button primary color="orange">blabla</Button>
        <FieldInput title="name"></FieldInput>
        <FieldInput type="email" title="email"></FieldInput>
        <FieldInput type="password" title="password"></FieldInput>
       
    </div>)
}

export default Signup;
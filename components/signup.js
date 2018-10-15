
import Button from './ui/Button'
import Input from './ui/Input'
import FieldInput from './FieldInput';
import React from 'react'

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: 'ddd@.fr',
            password: ''
    };

    let passwordError = "";
    let emailError = "";
    

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleNameChange(event){
          this.setState({name: event.target.value});
      }

      handleEmailChange(event) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({email: event.target.value});
        if(regex.test(this.state.email.toLowerCase())){
            this.emailError = "success";
        }else{
            this.emailError = "error";
        }
      }
      handlePasswordChange(event){
          this.setState({password: event.target.value});  
      }
    
      handleSubmit(event) {

        /* SEND REQUEST AUTH */
        event.preventDefault();
      }

      testPassword(password){
        return (this.state.password.length < 10) ? "error" : "success";
      }
      testEmail(email){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return(regex.test(this.state.email.toLowerCase())) ? "success" : "error";
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <FieldInput   title="name" value={this.state.name} onChange={this.handleNameChange}></FieldInput>

            <FieldInput warning={this.testEmail(this.state.email)} title="email" type="email" value={this.state.email} onChange={this.handleEmailChange}></FieldInput>

            <FieldInput warning={this.testPassword(this.state.password)} title="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}></FieldInput>

            <Button type="submit" primary color="#00cc00">SignUp</Button>
          </form>
        );
      }
}

/*const Signup = () =>{
    return (<div>
    <form>
        <FieldInput title="name"></FieldInput>
        <FieldInput type="email" title="email"></FieldInput>
        <FieldInput type="password" title="password"></FieldInput>
        <Button primary color="#00cc00">SignUp</Button>
    </form>

       
    </div>)
}*/

export default Signup;
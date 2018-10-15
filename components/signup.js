
import Button from './ui/Button'
import FieldInput from './FieldInput';
import React from 'react'

import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

export const SignupQuery = gql`
    mutation signup($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $password: String!){
        signup(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, password: $password){
            token
        }
    }
`;

class Signup extends React.Component{
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            firstname: '',
            lastname: '',
            nickname: '',
            email: 'example@eleckto.fr',
            password: ''
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){}
    
      handleChange(event){
          this.setState({
              [event.target.name]: event.target.value
            });
      }
    
       handleSubmit(event, signup) {
        event.preventDefault();

        if(this.testPassword(this.state.password) == "success" && this.testEmail(this.state.email) == "success"
            && this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.nickname.length > 0){
         
               
                signup({variables: {
                    firstName: this.state.firstname,
                    lastName: this.state.lastname,
                    nickname: this.state.nickname,
                    email: this.state.email,
                    password: this.state.password
                }})
            }
      }

      testPassword(password){
        return (this.state.password.length < 2) ? "error" : "success";
      }
      testEmail(email){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return(regex.test(this.state.email.toLowerCase())) ? "success" : "error";
      }
    
      render() {
        return (
            
            <Mutation mutation={SignupQuery}>
                {
                    (signup, {data, error, loading}) => {

                        if(data) {
                            console.log({content: data.signup.token})
                            window.localStorage.setItem("elektoAuthToken",data.signup.token)
                        }
                       return(
                      <div>
                        <h2>SignUp</h2>

                       <form onSubmit={event => this.handleSubmit(event, signup)}>
                       <FieldInput  title="firstname" value={this.state.firstname} onChange={this.handleChange}></FieldInput>
           
                       <FieldInput  title="lastname" value={this.state.lastname} onChange={this.handleChange}></FieldInput>
           
                       <FieldInput  title="nickname" value={this.state.name} onChange={this.handleChange}></FieldInput>
           
                       <FieldInput warning={this.testEmail(this.state.email)} title="email" type="email" value={this.state.email} onChange={this.handleChange}></FieldInput>
           
                       <FieldInput warning={this.testPassword(this.state.password)} title="password" type="password" value={this.state.password} onChange={this.handleChange}></FieldInput>
           
                       <Button type="submit" primary color="#00cc00">SignUp</Button>
                     </form>
                      </div>
) 
                    }
                      
                }

          </Mutation>
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
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Signup from './Signup'


const Home = () => {
  const[input, setInput] = useState({
    name:"",
    email:"",
    date:"",
    password:""
  })

  const getData = (e)=>{
      const {value, name} = e.target; 
      // console.log(value, name); 

      setInput(()=>{
        return {
          ...input,
          [name]:value
        }
      })
  }

  const addData = (e)=>{
    e.preventDefault();

    const[name, email, date, password] = input;

    if(name === ""){
      alert("Name field is empty")
    }
    else if(email === ""){
      alert("email field is empty")
    }
    else if(!email.include("@")){
      alert("Please enter valid email address")
    }
    else if(date === ""){
      alert("date field is empty")
    }
    else if(password === ""){
      alert("password field is empty")
    }
    else if(password.length <= 5){
      alert("Password musrt be at least 6 characters")
    }
  }
  return (
    <>
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style = {{width:"100%"}}>
          <h3 className = "text-center col-lg-6">Sign Up</h3>
          <Form>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name = "name" onChange = {getData} placeholder="Enter Your Name" />
              
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name = "email" onChange = {getData} placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date"name = "date"  onChange={getData}/>
              
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name = "password" onChange = {getData} placeholder="Enter Password" />
            </Form.Group>
            
            <Button variant="primary" onClick = {addData} type="submit" className="col-lg-6">
              Submit
            </Button>
          </Form>
          <p>Already Have an Account Sign in</p>
        </div>

        <Signup/>
       
      </section>
    </div>
    </>
  );
};

export default Home;

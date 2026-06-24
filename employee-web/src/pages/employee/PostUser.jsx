import React, { useState } from 'react'
import style1 from "../employee/PostUser.module.css";
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PostUser = () => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    phone : "",
    department : ""
  })

  const navigate = useNavigate();

  function handleInputChange(event){
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  async function handleSubmit(e){
     e.preventDefault();
     console.log(formData);

     try {
      const response = await fetch("http://localhost:8080/api/employee",{
       method:"POST",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Employee Created : ",data);
      navigate("/");
      
     } catch (error) {
      console.log("Error creating employee : "+error);
     }
     
  }

  return (
    <>
      <div className={style1.center_form}>
        <h1>Post New Employee</h1>

        <Form className={style1.Form} onSubmit={handleSubmit}>
          <FormGroup controlId='formBasicName'>
            <FormControl className={style1.form_control} type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleInputChange}/>
          </FormGroup>

          <FormGroup controlId='formBasicName'>
            <FormControl className={style1.form_control} type='email' name='email' placeholder='Enter Email' value={formData.email} onChange={handleInputChange}/>
          </FormGroup>

          <FormGroup controlId='formBasicName'>
            <FormControl className={style1.form_control} type='text' name='phone' placeholder='Enter Phone No' value={formData.phone} onChange={handleInputChange}/>
          </FormGroup>

           <FormGroup controlId='formBasicName'>
            <FormControl className={style1.form_control} type='text' name='department' placeholder='Enter Department' value={formData.department} onChange={handleInputChange}/>
          </FormGroup>

          <Button variant='primary' type='submit' className='w-100'>Post Employee</Button>
        </Form>
      </div>
    </>
  )
}

export default PostUser
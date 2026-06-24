import React, { useEffect, useState } from 'react'
import style1 from "./UpdateUser.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'

const UpdateUser = () => {

  const {id} = useParams();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name : "",
    email : "",
    phone : "",
    department : ""
  })

  useEffect(() => {
    async function fetchEmployee(){
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error Fetching user : ",error.message);
        
      }
    } 
    fetchEmployee();
  }, [id]);
  

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`,{

        method:"PATCH",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("User Updated : ", data);
      navigate("/");
      
    } catch (error) {
      console.error("Error Updating User : ",error.message);
      
    }
  }

  function handleInputChange(event){
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }


  return (
    <>
      <div className={style1.center_form}>
        <h1>Edit Employee</h1>

        

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

          <Button variant='primary' type='submit' className='w-100' >Edit Employee</Button>
        </Form>
      </div>
    </>
  )
}

export default UpdateUser
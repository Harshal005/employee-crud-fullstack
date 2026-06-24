import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEmployees(){
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        console.log(data);
        
        setEmployees(data);

      } catch (error) {
        console.error("Error Fetching Employees : ",error.message);
        
      }
    }
  
    fetchEmployees();
  }, [])

  async function handleDelete(employeeId) {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`,{
        method: "DELETE"
      });
      if(response.ok){
        setEmployees((prevEmployees) => prevEmployees.filter((employee)=> employee.id != employeeId));

        // setEmployees((prevEmployees) =>{
        //   prevEmployees.filter((employee) =>{
        //     return employee.id != employeeId;
        //   })
        // });
        // Remember if we use {} braces in a function then explicitly we need write return every time 
      }
      alert(`Employee with ID ${employeeId} deleted successfully`);
      
    } catch (error) {
      console.error("Error Deleting employee :",error.message);
      
    }
  }
  

  function handleUpdate(employeeId){
    navigate(`/employee/${employeeId}`);
  }

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <h1 className='text-center'>Employees</h1>
            <Table striped bordered hover responsive>
               <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
               </thead>

               <tbody>
                {
                  employees.map((employee)=>{
                    return (

                      <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.department}</td>
                      <td>
                        <Button variant='outline-secondary' onClick={()=>handleUpdate(employee.id)}>Update</Button>&nbsp;&nbsp;
                        <Button variant='outline-danger' onClick={()=>{
                          handleDelete(employee.id)
                        }}>Delete</Button>
                      </td>
                    </tr>
                    )
                  })
                }
               </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
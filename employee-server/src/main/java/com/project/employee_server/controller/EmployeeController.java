package com.project.employee_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.employee_server.entity.Employee;
import com.project.employee_server.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeService.postEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
		try {
			employeeService.deleteEmployee(id);
			return new ResponseEntity<>("Employee with ID "+id+" deleted successfully",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable long id){
		Employee employee = employeeService.getEmployeeById(id);
		if(employee == null) {
			return ResponseEntity.notFound().build();
		}
		else {
			return ResponseEntity.ok(employee);
		}
	}
	
	@PatchMapping("/employee/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable long id,@RequestBody Employee employee){
		
		Employee updatedEmployee = employeeService.updateEmployee(id, employee);
		
		if(updatedEmployee == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(updatedEmployee);
		
	}
	
	
}

package com.project.employee_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.employee_server.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	

}

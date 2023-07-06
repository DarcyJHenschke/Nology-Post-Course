package io.nology.employeeApp2.employee;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping
	public ResponseEntity<List<Employee>> all() {
		List<Employee> allEmployees = this.service.all();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.findById(id);
		if (maybeEmployee.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.OK);
		
	}
	
	
	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeCreateDTO data) {
		Employee createdEmployee = this.service.create(data);
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> delete(@PathVariable Long id) {
		boolean isDeleted = this.service.delete(id);

		if (isDeleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Employee> update(@PathVariable Long id, @Valid @RequestBody EmployeeCreateDTO data) {
		Employee updatedEmployee = this.service.update(id, data);
		return new ResponseEntity<>(updatedEmployee, HttpStatus.CREATED);
	}
	
	

}

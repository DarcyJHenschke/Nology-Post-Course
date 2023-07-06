package io.nology.employeeApp2.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repository;
	
	public Employee create(EmployeeCreateDTO data) {
		String cleanedFirstName = data.getFirstName().trim().toLowerCase();
		String cleanedMiddleName = data.getMiddleName().trim().toLowerCase();
		String cleanedLastName = data.getLastName().trim().toLowerCase();
		
		Employee newEmployee = new Employee(cleanedFirstName, cleanedMiddleName, cleanedLastName, data.getEmailAddress(), 
				data.getPhoneNumber(), data.getAddress(), data.getContractType(), data.getStartDate(),
				data.getEndDate(), data.getOngoing());
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
	public List<Employee> all() {
		return this.repository.findAll();
	}
	
	public Optional<Employee> findById(Long id) {
		return this.repository.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Employee> maybeEmployee = this.repository.findById(id);
		if (maybeEmployee.isEmpty()) {
			return false;
		}
		this.repository.delete(maybeEmployee.get());
		return true;
	}
	
	public Employee update(Long id, EmployeeCreateDTO data) {
		
		String cleanedFirstName = data.getFirstName().trim().toLowerCase();
		String cleanedMiddleName = data.getMiddleName().trim().toLowerCase();
		String cleanedLastName = data.getLastName().trim().toLowerCase();
		
		Employee updateEmployee = this.repository.findById(id).get();
		updateEmployee.firstName = data.getFirstName();
		updateEmployee.lastName = data.getLastName();
		updateEmployee.middleName = data.getMiddleName();
		updateEmployee.emailAddress = data.getEmailAddress();
		updateEmployee.phoneNumber = data.getPhoneNumber();
		updateEmployee.address = data.getAddress();
		updateEmployee.contractType = data.getContractType();
		updateEmployee.startDate = data.getStartDate();
		updateEmployee.endDate = data.getEndDate();
		updateEmployee.ongoing = data.getOngoing();
		this.repository.save(updateEmployee);
		return updateEmployee;
		
	}
	
	

}

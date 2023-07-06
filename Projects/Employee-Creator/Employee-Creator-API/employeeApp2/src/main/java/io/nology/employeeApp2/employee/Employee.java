package io.nology.employeeApp2.employee;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	
	@Column
	String firstName;
	
	@Column
	String middleName;
	
	@Column
	String lastName;
	
	@Column
	String emailAddress;
	
	@Column
	String phoneNumber;
	
	@Column
	String address;
	
	@Column
	String contractType;
	
	@Column
	Date startDate;
	
	@Column
	Date endDate;
	
	@Column
	Boolean ongoing;
	
	public Employee() {
		
	}
	
	public Employee(String firstName, String middleName, String lastName, 
			String emailAddress, String phoneNumber, String address, String contractType, Date startDate, Date endDate, Boolean ongoing) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.contractType = contractType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.ongoing = ongoing;
		
		
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddres) {
		this.emailAddress = emailAddres;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Boolean getOngoing() {
		return ongoing;
	}

	public void setOngoing(Boolean ongoing) {
		this.ongoing = ongoing;
	}
}

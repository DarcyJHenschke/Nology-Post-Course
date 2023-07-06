package io.nology.employeeApp2.employee;

import java.util.Date;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

public class EmployeeCreateDTO {
	@NotBlank
	String firstName;
	@NotBlank
	String middleName;
	@NotBlank
	String lastName;
	@NotBlank
	String emailAddress;
	@NotBlank
	@Size(min = 10, max = 10)
	String phoneNumber;
	@NotBlank
	String address;
	@NotBlank
	String contractType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@NotNull
	Date startDate;
	Date endDate;
	Boolean ongoing;
	public EmployeeCreateDTO(@NotBlank String firstName, @NotBlank String middleName, @NotBlank String lastName,
			@NotBlank String emailAddress, @NotBlank @Size(min = 10, max = 10) String phoneNumber,
			@NotBlank String address, @NotBlank String contractType, @NotNull Date startDate, Date endDate,
			Boolean ongoing) {
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

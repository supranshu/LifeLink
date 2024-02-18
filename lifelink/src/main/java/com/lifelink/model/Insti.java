package com.lifelink.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Insti {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long instId;
	private String instName;
	private String instType;
	private String city;
	private String state;
	private String contactNo;
	private String email;
	private String password;
	private String certificate;
	
	
	
	

	

	

	

	public Insti() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Insti(long instId, String instName, String instType, String city, String state, String contactNo,
			String email, String password, String certificate) {
		super();
		this.instId = instId;
		this.instName = instName;
		this.instType = instType;
		this.city = city;
		this.state = state;
		this.contactNo = contactNo;
		this.email = email;
		this.password = password;
		this.certificate = certificate;
	}

	public String getCertificate() {
		return certificate;
	}

	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getInstName() {
		return instName;
	}

	public void setInstName(String instName) {
		this.instName = instName;
	}

	public String getInstType() {
		return instType;
	}

	public void setInstType(String instType) {
		this.instType = instType;
	}

	public long getInstId() {
		return instId;
	}

	public void setInstId(long instId) {
		this.instId = instId;
	}
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	

}

package com.lifelink.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lifelink.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}

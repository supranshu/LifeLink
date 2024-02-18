package com.lifelink.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lifelink.model.Organs;

@Repository
public interface OrgansRepo extends JpaRepository<Organs, Long> {

	List<Organs> findByDonorInstName(String instName);
}

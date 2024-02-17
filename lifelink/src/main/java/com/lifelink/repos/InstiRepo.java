package com.lifelink.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lifelink.model.Insti;

@Repository
public interface InstiRepo extends JpaRepository<Insti, Long> {

	Insti findByInstName(String instName);
}

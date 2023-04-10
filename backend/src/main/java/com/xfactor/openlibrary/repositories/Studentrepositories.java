package com.xfactor.openlibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Student;

public interface Studentrepositories extends JpaRepository<Student, Long>{
    
}

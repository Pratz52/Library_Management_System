package com.xfactor.openlibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Admin;

public interface Adminrepositories extends JpaRepository<Admin, Long> {

    
}

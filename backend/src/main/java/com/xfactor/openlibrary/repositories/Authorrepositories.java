package com.xfactor.openlibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Author;


public interface Authorrepositories extends JpaRepository<Author, Long>{
    
}

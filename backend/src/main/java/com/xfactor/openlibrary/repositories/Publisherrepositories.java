package com.xfactor.openlibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Publisher;

public interface Publisherrepositories extends JpaRepository<Publisher, Long> {
    
}

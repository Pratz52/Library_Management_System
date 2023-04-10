package com.xfactor.openlibrary.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Book;

public interface Bookrepositories extends JpaRepository<Book, Long> {
//    List<Book> findbyTitleAndIsbn(String title, String isbn);
List<Book> findByTitle (String title);
List<Book> findByTitleAndIsbn (String title, String isbn);
    
}

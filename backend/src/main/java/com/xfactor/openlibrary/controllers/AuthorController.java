package com.xfactor.openlibrary.controllers;

import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repositories.Authorrepositories;


import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Author")
public class AuthorController{
    
        //ArrayList<Author> lauthor = new ArrayList<>();
        private Authorrepositories authorrepositories;
        
        
        public AuthorController(Authorrepositories authorrepositories) {
                this.authorrepositories = authorrepositories;
        }

        @PostMapping("/saveAdmin")
        public Author saveAuthor(@RequestBody Author author){
             authorrepositories.save(author);
             return author;
    
        }

        @GetMapping("/getAllAuthors")
            public List<Author> getAllAuthors(){
            return authorrepositories.findAll();
            }

        @DeleteMapping("/delete/{id}")
        public void deleteAuthor(@PathVariable long id){
                authorrepositories.deleteById(id);
        }
    }

   
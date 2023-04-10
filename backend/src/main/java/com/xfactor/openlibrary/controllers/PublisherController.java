package com.xfactor.openlibrary.controllers;

import com.xfactor.openlibrary.domain.Publisher;
import com.xfactor.openlibrary.repositories.Publisherrepositories;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("Publisher")
public class PublisherController {

    private Publisherrepositories publisherrepositories;
    


    public PublisherController(Publisherrepositories publisherrepositories) {
        this.publisherrepositories = publisherrepositories;
    }

    //ArrayList<Publisher> lpublishers = new ArrayList<>();
    @PostMapping("/savePublisher")
        public Publisher savePublisher(@RequestBody Publisher publisher){
        publisherrepositories.save(publisher);
        return publisher;
    }

    @GetMapping("/getAllPublishers")
        public List<Publisher> getAllPublishers(){
            return publisherrepositories.findAll();
        }

    @DeleteMapping("/delete/{id}")
        public void deletePublisher(@PathVariable long id){
            publisherrepositories.deleteById(id);
        }
        
}


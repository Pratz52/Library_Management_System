package com.xfactor.openlibrary.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;

//import javax.validation.constraints.Null;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.repositories.Adminrepositories;

// import antlr.collections.List;

@RestController
@RequestMapping("Admin")
public class AdminController {
    // public ArrayList<Admin> ladmin = new ArrayList<>();
    //private Adminrepositories adminrepositories;

    

    private Adminrepositories adminrepositories;
    public AdminController(Adminrepositories adminrepositories) {
        this.adminrepositories = adminrepositories;
    }

    @PostMapping("/saveAdmin")
    public Admin saveBook(@RequestBody Admin admin) {
        adminrepositories.save(admin);
        return admin;
    }

    @GetMapping("/getAllAdmin")
    public List<Admin> getAllAdmin(){
        return adminrepositories.findAll();


    }
    @GetMapping("findTotal")
    public Long findTotal() {
        return adminrepositories.count();
    }
    @DeleteMapping("/delete/{id}")
    public void deleteAdmin(@PathVariable long id){
        adminrepositories.deleteById(id);
    }
}

package com.xfactor.openlibrary.controllers;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Student;
import com.xfactor.openlibrary.repositories.Studentrepositories;

@RestController
@RequestMapping("Student")
public class StudentController {
    //ArrayList<Student> lstudent = new ArrayList<>();
    private Studentrepositories studentrepositories;
    
    
    public StudentController(Studentrepositories studentrepositories) {
        this.studentrepositories = studentrepositories;
    }

    @PostMapping("/saveStudent")
    public Student savStudent(@RequestBody Student student){
        studentrepositories.save(student);
        return student;
    }

    @GetMapping("/getAllStudent")
    public List<Student> getAllStudent(){
        return studentrepositories.findAll();
    }
    // @DeleteMapping("/delete/{id}")
    // public void deleteBook (@PathVariable long id){
    //     Studentrepositories.deleteById(id);
    // }
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable long id){
        studentrepositories.deleteById(id);
    }

}

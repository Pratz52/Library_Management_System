package com.xfactor.openlibrary.controllers;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Loan;
import com.xfactor.openlibrary.repositories.Loanrepositories;

@RestController
@RequestMapping("Loan")
public class LoanController {
    //ArrayList<Loan> lloan = new ArrayList<>();

    private Loanrepositories loanrepositories;
    

    public LoanController(Loanrepositories loanrepositories) {
        this.loanrepositories = loanrepositories;
    }
    @PostMapping("/saveLoan")
    public Loan saveLoan(@RequestBody Loan loan){
        loanrepositories.save(loan);
        return loan;
    }
    @GetMapping("/getAllLoan")
    public List<Loan> getAllLoan(){
        return loanrepositories.findAll();
    }
    // @GetMapping("/getByDueDate/{dueDate}")
    // public List<Loan> getBydueDate(@PathVariable String dueDate){
    //     List<Loan> l = loanrepositories.getByDueDate(dueDate) ;
    //     return l;
    // }

    @DeleteMapping("/delete/{id}")
    public void deleteLoan(@PathVariable long id){
        loanrepositories.deleteById(id);
    }

}

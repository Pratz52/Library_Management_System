package com.xfactor.openlibrary.repositories;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Loan;

public interface Loanrepositories extends JpaRepository<Loan, Long> {
   // List<Loan> getByDueDate(String dueDate);
}

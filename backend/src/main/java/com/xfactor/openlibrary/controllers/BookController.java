package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Book;
import com.xfactor.openlibrary.repositories.Bookrepositories;

// import io.swagger.v3.oas.annotations.parameters.RequestBody;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("Book")
public class BookController{
    //ArrayList<Book> lBooks = new ArrayList<>();
    private Bookrepositories bookrepositories;

    

    
    public BookController(Bookrepositories bookrepositories) {
        this.bookrepositories = bookrepositories;
    }

    @PostMapping("/saveBook")
    public Book saveBook(@RequestBody Book book){
         bookrepositories.save(book);
         return book;

    }

    @GetMapping("/getAll")
        public List<Book> getAllBooks(){
        return bookrepositories.findAll();
        }


    @GetMapping("/getBookByTitle/{title}")
    public List<Book> findByTitle(@PathVariable String title){
        List<Book> listOfBooksByTitle = bookrepositories.findByTitle(title);
        return listOfBooksByTitle;
    }

    @GetMapping("/getBookByTitleAndIsbn/{title}/{isbn}")
    public List<Book> findByTitleAndIsbn(@PathVariable String title, @PathVariable String isbn){
        List<Book> listOfBooksByTitleAndIsbn = bookrepositories.findByTitleAndIsbn(title, isbn);
        return listOfBooksByTitleAndIsbn;
    }
    // @GetMapping("/AllbyValue/{title}/{isbn}")
    // public List<Book> findbyTitleAndIsbn(@PathVariable String title,@PathVariable String isbn){
    //     List<Book>l=bookrepositories.findbyTitleAndIsbn(title, isbn);
    //     return l;
    //     }

    @PutMapping("/updateBook")
    public Book updateBook (@RequestBody Book book){
        if (book.getId() != null){
            Book updatedbook = bookrepositories.save(book);
            return updatedbook;
        }        
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBook (@PathVariable long id){
        bookrepositories.deleteById(id);
    }
}

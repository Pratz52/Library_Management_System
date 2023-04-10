package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class Hello {

    @GetMapping("/hello")
    public String hello(@RequestParam String name, int rollNo, Long phoneNo) {
        return "Hello " + name + " Hope your roll number have been declared " + rollNo + "!! " +
        phoneNo + "This is your registered Phone Number";
    }

    @GetMapping("/hihello/{name}")
    public String Hihihello (@PathVariable String name, @PathVariable int age) {
        return "Hi " + name + " are you " + age ;
    }

    @GetMapping("/hi/{name}")
    public String sayHi (@PathVariable String name, @RequestParam int age) {
        return "Hi " + name + " are you " + age ;
    }
    
    @GetMapping("/json/{name}/{age}")
    public HashMap<String, Object> json (@PathVariable String name, @PathVariable int age){
        HashMap<String,Object> respHashMap = new HashMap<>();
        respHashMap.put("name", name);
        respHashMap.put("age", age);
        return respHashMap;

    }



}

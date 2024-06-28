package com.example.demo.Controller;

import com.example.demo.Model.TaiKhoan;
import com.example.demo.Service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaiKhoanCTL {
    @Autowired
    private TaiKhoanService service;
    @GetMapping("/api/login")
    public TaiKhoan login(@RequestParam("username") String username,
                          @RequestParam("password") String password) {
        return service.login(username, password);
    }
}

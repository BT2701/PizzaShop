package com.example.demo.Controller;

import com.example.demo.Model.TaiKhoan;
import com.example.demo.Service.TaiKhoanService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaiKhoanCTL {
    @Autowired
    private TaiKhoanService service;
    @PostMapping("/api/login")
    public Map<String, Object> login(@RequestParam("username") String username,
                                     @RequestParam("password") String password,
                                     HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();
        session.setAttribute("username", username);
        session.setAttribute("password", password);

        response.setHeader("Access-Control-Allow-Credentials", "true");

        Map<String, Object> result = new HashMap<>();
        boolean loginSuccessful = service.loginSuccessful(username, password);

        if (loginSuccessful) {
            result.put("message", "Login Succeeded!");
            result.put("user", service.login(username, password)); // Thay thế bằng phương thức để lấy chi tiết người dùng
        } else {
            result.put("message", "Login Failed!");
        }

        return result;
    }
}

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

@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true", allowedHeaders = "Content-Type, Authorization")
@RestController
public class TaiKhoanCTL {
    @Autowired
    private TaiKhoanService service;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginData,
                                     HttpServletRequest request, HttpServletResponse response) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        HttpSession session = request.getSession();
        session.setAttribute("username", username);
        session.setAttribute("password", password);

        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

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

    @RequestMapping(value = "/login", method = RequestMethod.OPTIONS)
    public void handleOptions(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }

}

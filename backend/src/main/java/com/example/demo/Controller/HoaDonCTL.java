package com.example.demo.Controller;

import com.example.demo.Model.KhachHang;
import com.example.demo.Service.HoaDonService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@CrossOrigin(origins = "https://bt2701.github.io/PizzaShop/", allowCredentials = "true")

public class HoaDonCTL {
    @Autowired
    private HoaDonService hoaDonService;

    @GetMapping("/api/history")
    public Map<String, Object> history(HttpSession session) {
        KhachHang kh= (KhachHang) session.getAttribute("user");
        int makh= kh.getMakh();
        Map<String, Object> map = hoaDonService.getDataToView(makh);
        return map;
    }
}

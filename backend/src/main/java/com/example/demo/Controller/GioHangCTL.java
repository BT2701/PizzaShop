package com.example.demo.Controller;

import com.example.demo.Model.KhachHang;
import com.example.demo.Service.ChiTietGioHangService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class GioHangCTL {
    @Autowired
    private ChiTietGioHangService chiTietGioHangService;

    @GetMapping("api/cart")
    public Map<String, Object> cartDetail(HttpSession session){
//        Map<String, Object> response = new HashMap<>();
//        KhachHang kh= (KhachHang) session.getAttribute("user");
//        int makh= kh.getMakh();
//        response.put("count", chiTietGioHangService.getNumOfProduct());
//        response.put("cart-detail",null);
        return null;
    }
}
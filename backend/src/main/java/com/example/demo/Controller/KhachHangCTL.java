package com.example.demo.Controller;

import com.example.demo.Service.KhachHangService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class KhachHangCTL {
    @Autowired
    private KhachHangService khachHangService;
    @PutMapping("/api/updateCustomer")
    public Map<String, Object> updateCustomer(@RequestParam("makh")int makh,
                                              @RequestParam("avt")String avt,
                                              @RequestParam("email")String email,
                                              @RequestParam("sdt")String sdt,
                                              @RequestParam("gender")String gioitinh,
                                              @RequestParam("birth")String birth,
                                              @RequestParam("address")String address,
                                              @RequestParam("ho")String ho,
                                              @RequestParam("ten")String ten,
                                              @RequestParam("tongchitieu")int tongchitieu,
                                              @RequestParam("username") String username,
                                              HttpSession session){
        Map<String, Object> response = khachHangService.updateKhachHang(makh,avt, email, sdt, gioitinh, birth, address, ho, ten, tongchitieu, username);
        if((boolean) response.get("checked")){
            session.setAttribute("user", response.get("user"));
        }
        return response;
    }
}

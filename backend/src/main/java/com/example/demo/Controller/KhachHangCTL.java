package com.example.demo.Controller;

import com.example.demo.Service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class KhachHangCTL {
    @Autowired
    private KhachHangService khachHangService;
    @PutMapping("/api/updateCustomer")
    public boolean updateCustomer(@RequestParam("makh")int makh,
                                  @RequestParam("avt")String avt,
                                  @RequestParam("email")String email,
                                  @RequestParam("sdt")String sdt,
                                  @RequestParam("gender")String gioitinh,
                                  @RequestParam("birth")String birth,
                                  @RequestParam("address")String address,
                                  @RequestParam("ho")String ho,
                                  @RequestParam("ten")String ten){
        return khachHangService.updateKhachHang(makh,avt, email, sdt, gioitinh, birth, address, ho, ten);
    }
}

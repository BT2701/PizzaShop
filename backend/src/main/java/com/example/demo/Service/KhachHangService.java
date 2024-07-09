package com.example.demo.Service;

import com.example.demo.Model.KhachHang;
import com.example.demo.Repository.KhachHangRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;


@Service
public class KhachHangService {
    @Autowired
    private KhachHangRepo repo;
    public boolean updateKhachHang(int makh, String avt, String email, String sdt, String gioitinh, String birth, String address, String ho, String ten) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = new Date(sdf.parse(birth).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        KhachHang khachHang = new KhachHang();
        khachHang.setMakh(makh);
        khachHang.setAvt(avt);
        khachHang.setEmail(email);
        khachHang.setSdt(sdt);
        khachHang.setGioitinh(gioitinh);
        khachHang.setBirth(date);
        khachHang.setAddress(address);
        khachHang.setTinhtrang(1);
        khachHang.setHo(ho);
        khachHang.setTen(ten);
        System.out.println(birth);
        try {
            repo.save(khachHang);
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }
}

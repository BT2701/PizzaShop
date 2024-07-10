package com.example.demo.Service;

import com.example.demo.Model.KhachHang;
import com.example.demo.Repository.KhachHangRepo;
import com.example.demo.Repository.TaiKhoanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;


@Service
public class KhachHangService {
    @Autowired
    private KhachHangRepo repo;
    @Autowired
    private TaiKhoanRepo taiKhoanRepo;
    public Map<String, Object> updateKhachHang(int makh, String avt, String email, String sdt, String gioitinh, String birth, String address, String ho, String ten, int tongchitieu, String username) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        Map<String, Object> response = new HashMap<>();
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
        khachHang.setTongchitieu(tongchitieu);
        khachHang.setTaikhoan(taiKhoanRepo.findByUsername(username));
        try {
            repo.save(khachHang);
            response.put("user", khachHang);
            response.put("checked", true);
        }
        catch (Exception e) {
            response.put("checked", false);
        }
        return response;
    }
}

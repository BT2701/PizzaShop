package com.example.demo.Service;

import com.example.demo.Model.KhachHang;
import com.example.demo.Model.PhanQuyen;
import com.example.demo.Model.TaiKhoan;
import com.example.demo.Repository.KhachHangRepo;
import com.example.demo.Repository.TaiKhoanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaiKhoanService {
    @Autowired
    private TaiKhoanRepo tkRepo;
    @Autowired
    private KhachHangRepo khRepo;
    public Object login(String username, String password) {
        if(username.contains("@")){
            return tkRepo.loginByEmail(username, password);
        }
        else if(isInteger(username)){
            return tkRepo.loginByPhonenumber(username,password);
        }
        else {
            return tkRepo.loginByUsername(username, password);
        }
    }
    public boolean loginSuccessful(String username, String password) {
        if (login(username, password)!=null){
            return true;
        }
        else
            return false;
    }
    public static boolean isInteger(String s) {
        if (s == null || s.isEmpty()) {
            return false;
        }
        try {
            Integer.parseInt(s);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public boolean register(String fullname, String password, String email, String phonenumber) {
        String []name= fullname.split(" ");
        String firstname = name[name.length-1];
        String lastname = "";
        for(int i=0;i<name.length-1;i++){
            lastname+=name[i];
            lastname+=" ";
        }

        try {
            KhachHang khachHang = new KhachHang();
            khachHang.setEmail(email);
            khachHang.setSdt(phonenumber);
            khachHang.setHo(lastname);
            khachHang.setTen(firstname);
            khachHang.setTinhtrang(1);
            khachHang.setTongchitieu(0);
            khRepo.save(khachHang);
            String username="KH"+khRepo.findMaxId();
            PhanQuyen phanQuyen = new PhanQuyen();
            phanQuyen.setQuyen(1);
            TaiKhoan taiKhoan = new TaiKhoan();
            taiKhoan.setUsername(username);
            taiKhoan.setMatkhau(password);
            taiKhoan.setTrangthai(1);
            taiKhoan.setKhachhang(khachHang);
            taiKhoan.setPhanquyen(phanQuyen);
            tkRepo.save(taiKhoan);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}

package com.example.demo.Service;

import com.example.demo.Model.TaiKhoan;
import com.example.demo.Repository.TaiKhoanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaiKhoanService {
    @Autowired
    private TaiKhoanRepo repo;
    public Object login(String username, String password) {
        if(username.contains("@")){
            return repo.loginByEmail(username, password);
        }
        else if(isInteger(username)){
            return repo.loginByPhonenumber(username,password);
        }
        else {
            return repo.loginByUsername(username, password);
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
}

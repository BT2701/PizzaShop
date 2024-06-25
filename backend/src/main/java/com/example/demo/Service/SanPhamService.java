package com.example.demo.Service;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SanPhamService {
    @Autowired
    private SanPhamRepo repo;
    public List<Object[]> danhSachSpNoiBac(int limit) {
        List<Object[]> list = new ArrayList<>();
        for (int i = 0; i < limit; i++) {
            list.add(repo.danhSachSpNoiBac().get(i));
        }
        return list;
    }
    public List<Object[]> getALL(int currentPage) {
        List<Object[]> list = new ArrayList<>();
        int count=0;
        for (int i = (currentPage -1)*15; i < repo.getALL().size(); i++) {
            if(count ==15){
                break;
            }
            list.add(repo.getALL().get(i));
            count++;
        }
        return list;
    }
    public int numOfProduct(){
        return repo.findAll().size();
    }
}

package com.example.demo.Service;

import com.example.demo.Model.Loai;
import com.example.demo.Repository.LoaiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiService {
    @Autowired
    private LoaiRepo repo;
    public List<Loai> getAllLoai() {
        return repo.findAll();
    }
}

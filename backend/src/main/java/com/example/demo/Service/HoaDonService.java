package com.example.demo.Service;

import com.example.demo.Model.ChiTietHoaDon;
import com.example.demo.Model.HoaDon;
import com.example.demo.Repository.ChiTietHoaDonRepo;
import com.example.demo.Repository.HoaDonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HoaDonService {
    @Autowired
    private HoaDonRepo hoaDonRepo;
    @Autowired
    private ChiTietHoaDonRepo chiTietHoaDonRepo;
    public Map<String, Object> getDataToView(int makh){
        Map<String, Object> data = new HashMap<>();
        List<HoaDon> hoaDons = hoaDonRepo.findByKH(makh);
        data.put("hoaDons", hoaDons);
        return data;
    }
}

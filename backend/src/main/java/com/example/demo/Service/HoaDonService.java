package com.example.demo.Service;

import com.example.demo.Model.*;
import com.example.demo.Repository.ChiTietHoaDonRepo;
import com.example.demo.Repository.HoaDonRepo;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
public class HoaDonService {
    @Autowired
    private HoaDonRepo hoaDonRepo;
    @Autowired
    private ChiTietHoaDonRepo chiTietHoaDonRepo;
    @Autowired
    private SanPhamRepo sanPhamRepo;
    public Map<String, Object> getDataToView(int makh){
        Map<String, Object> data = new HashMap<>();
        List<HoaDon> hoaDons = hoaDonRepo.findByKH(makh);
        data.put("hoaDons", hoaDons);
        return data;
    }
    public HoaDon addHoaDon(KhachHang khachHang, long total){
        try {
            HoaDon hoaDon = new HoaDon();
            hoaDon.setKhachhang(khachHang);
            hoaDon.setNgaylap(new Timestamp(new Date().getTime()));
            hoaDon.setTongtien(total);
            hoaDon.setGhichu("Đã thanh toán");
            hoaDon.setTinhtrang(1);
            hoaDonRepo.save(hoaDon);
            return hoaDonRepo.findTopByOrderByMahdDesc();
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public Boolean addDetails(List<ChiTietGioHang> chiTietGioHangList, HoaDon hd){
        try {
            if(chiTietGioHangList!=null){
                for(ChiTietGioHang ct: chiTietGioHangList){
                    ChiTietHoaDon chiTietHoaDon = new ChiTietHoaDon();
                    chiTietHoaDon.setHoadon(hd);
                    SanPham sp = ct.getSanpham();
                    sp.setSoluong(sp.getSoluong()-ct.getSoluong());
                    chiTietHoaDon.setSanpham(sp);
                    chiTietHoaDon.setSoluong(ct.getSoluong());
                    chiTietHoaDon.setDongia((long)ct.getSanpham().getDongia());
                    chiTietHoaDon.setThanhtien((long)(ct.getSanpham().getDongia()*ct.getSoluong()));
                    chiTietHoaDonRepo.save(chiTietHoaDon);
                    sanPhamRepo.save(sp);
                }
            }
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}

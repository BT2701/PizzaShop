package com.example.demo.Service;

import com.example.demo.Model.ChiTietGioHang;
import com.example.demo.Model.GioHang;
import com.example.demo.Model.SanPham;
import com.example.demo.Repository.ChiTietGioHangRepo;
import com.example.demo.Repository.GioHangRepo;
import com.example.demo.Repository.KhachHangRepo;
import com.example.demo.Repository.SanPhamRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ChiTietGioHangService {
    @Autowired
    private ChiTietGioHangRepo ctRepo;
    @Autowired
    private SanPhamRepo sanPhamRepo;
    @Autowired
    private GioHangRepo gioHangRepo;
    @Autowired
    private KhachHangRepo khachHangRepo;
    @Autowired
    private ChiTietGioHangRepo chiTietGioHangRepo;

    public boolean addDetail(int productId, int total, int makh){
        try {
            GioHang gioHang = gioHangRepo.getGioHangByKH(makh);
            if(gioHang==null){
                gioHang = new GioHang();
                gioHang.setKhachhang(khachHangRepo.findById(makh).orElse(null));
                gioHang.setTongtien(0);
                gioHangRepo.save(gioHang);
            }
            ChiTietGioHang ct = chiTietGioHangRepo.findBySP(productId);
            if(ct==null){
                ct = new ChiTietGioHang();
                SanPham sanPham=sanPhamRepo.findById(productId).orElse(null);
                ct.setSanpham(sanPham);
                ct.setSoluong(total);
                ct.setGiohang(gioHang);
            }
            else {
                ct.setSoluong(ct.getSoluong()+total);
            }
            ctRepo.save(ct);
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
    public Long getNumOfProduct(){
        return ctRepo.count();
    }
    public boolean removeDetail(int id){
        try {
            ChiTietGioHang ct= ctRepo.findById(id).orElse(null);
            ctRepo.delete(ct);
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
    public boolean removeCart(int makh){
        try {
            GioHang gioHang= gioHangRepo.getGioHangByKH(makh);
            ctRepo.deleteByGiohang(gioHang.getMagh());
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
    public List<ChiTietGioHang> getAll(int kh){
        try {
            GioHang gh= gioHangRepo.getGioHangByKH(kh);
            return ctRepo.getList(gh.getMagh());
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public int total(int kh){
        try {
            GioHang gh= gioHangRepo.getGioHangByKH(kh);
            return gh.getTongtien();
        }
        catch (Exception e){
            e.printStackTrace();
            return 0;
        }
    }
}

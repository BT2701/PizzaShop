package com.example.demo.Service;

import com.example.demo.Model.ChiTietGioHang;
import com.example.demo.Model.GioHang;
import com.example.demo.Repository.ChiTietGioHangRepo;
import com.example.demo.Repository.GioHangRepo;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChiTietGioHangService {
    @Autowired
    private ChiTietGioHangRepo ctRepo;
    @Autowired
    private SanPhamRepo sanPhamRepo;
    @Autowired
    private GioHangRepo gioHangRepo;

    public void addDetail(int productId, int total){
        ChiTietGioHang ct = new ChiTietGioHang();
        ct.setSanpham(sanPhamRepo.findById(productId).orElse(null));
        ct.setSoluong(total);
        ctRepo.save(ct);
    }
    public Long getNumOfProduct(){
        return ctRepo.count();
    }
    public void removeDetail(int id){
        ChiTietGioHang ct= ctRepo.findById(id).orElse(null);
        ctRepo.delete(ct);
    }
    public void paying(){
        ctRepo.deleteAll();
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

package com.example.demo.Controller;

import com.example.demo.Model.ChiTietGioHang;
import com.example.demo.Model.HoaDon;
import com.example.demo.Model.KhachHang;
import com.example.demo.Service.ChiTietGioHangService;
import com.example.demo.Service.HoaDonService;
import com.example.demo.Service.SanPhamService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@CrossOrigin(origins = "https://bt2701.github.io/PizzaShop/", allowCredentials = "true")
public class GioHangCTL {
    @Autowired
    private ChiTietGioHangService chiTietGioHangService;
    @Autowired
    private HoaDonService hoaDonService;
    @Autowired
    private SanPhamService sanPhamService;

    @GetMapping("api/cart")
    public Map<String, Object> cartDetail(HttpSession session){
        Map<String, Object> response = new HashMap<>();
        KhachHang kh= (KhachHang) session.getAttribute("user");
        int makh= kh.getMakh();
        response.put("count", chiTietGioHangService.getNumOfProduct());
        response.put("details",chiTietGioHangService.getAll(makh));
        return response;
    }
    @GetMapping("/api/addToCart")
    public boolean addToCart(HttpSession session,
                             @RequestParam("productId") int productId,
                             @RequestParam("quantity") int quantity){
        KhachHang kh= (KhachHang) session.getAttribute("user");
        int makh= kh.getMakh();
        return chiTietGioHangService.addDetail(productId,quantity, makh);
    }
    @GetMapping("/api/deleteFromCart")
    public boolean removeFromCart(@RequestParam("detailId") int detailId){
        return chiTietGioHangService.removeDetail(detailId);
    }

    @GetMapping("/api/paying")
    public boolean paying(HttpSession session,
                          @RequestParam("details")String details,
                          @RequestParam("total") int total){
        ObjectMapper objectMapper = new ObjectMapper();
        List<ChiTietGioHang> detailList = null;
        try {
            detailList = objectMapper.readValue(details, objectMapper.getTypeFactory().constructCollectionType(List.class, ChiTietGioHang.class));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        KhachHang kh= (KhachHang) session.getAttribute("user");
        int makh= kh.getMakh();
        HoaDon hoaDon= hoaDonService.addHoaDon(kh,(long)total);
        hoaDonService.addDetails(detailList,hoaDon);
        return chiTietGioHangService.removeCart(makh);
    }
}

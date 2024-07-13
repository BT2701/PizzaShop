package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Entity(name = "hoadon")
@Data
public class HoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mahd;
    @ManyToOne
    @JoinColumn(name = "makh")
    private KhachHang khachhang;
    @ManyToOne
    @JoinColumn(name = "manv")
    private NhanVien nhanvien;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp ngaylap;
    @Column
    private Long tongtien;
    @Column
    private String ghichu;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "hoadon")
    private List<ChiTietHoaDon> chiTietHoaDonList;
    @Column
    private Integer phantramgiam;
    @Column
    private Integer tinhtrang;
}

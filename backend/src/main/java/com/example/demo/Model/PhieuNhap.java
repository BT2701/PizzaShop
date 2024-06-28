package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Entity(name = "phieunhap")
@Data
public class PhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mapn;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "mancc")
    private NhaCungCap nhacungcap;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "manv")
    private NhanVien nhanvien;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp ngaylap;
    @Column
    private Long tongtien;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "phieunhap")
    private List<ChiTietPhieuNhap> chiTietPhieuNhapList;
}

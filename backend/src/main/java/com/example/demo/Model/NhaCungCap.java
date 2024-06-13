package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="nhacungcap")
@Data
public class NhaCungCap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mancc;
    @Column
    private String tenncc;
    @Column
    private String diachi;
    @Column
    private String dienthoai;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "nhacungcap")
    private List<PhieuNhap> phieuNhapList;
}

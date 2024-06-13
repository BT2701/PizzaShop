package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity(name="loai")
@Data
public class Loai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maloai;
    @Column
    private String tenloai;
    @JsonIgnore // để tránh vòng lặp vô hạn khi lấy dữ liệu
    @OneToMany(mappedBy = "loai")
    private List<SanPham> sanPhamList;
}

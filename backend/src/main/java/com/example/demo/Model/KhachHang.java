package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="khachhang")
@Data
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer makh;
    @Column
    private String ho;
    @Column
    private String ten;
    @Column
    private String gioitinh;
    @Column
    private Long tongchitieu;
    @Column
    private Integer tinhtrang;
}

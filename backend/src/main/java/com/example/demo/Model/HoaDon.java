package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name = "hoadon")
@Data
public class HoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mahd;
    @Column
    private Integer makh;
    @Column
    private Integer manv;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp ngaylap;
    @Column
    private Long tongtien;
    @Column
    private String ghichu;

}

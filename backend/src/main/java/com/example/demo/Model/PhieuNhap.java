package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name = "phieunhap")
@Data
public class PhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mapn;
    @Column
    private Integer mancc;
    @Column
    private Integer manv;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp ngaylap;
    @Column
    private Long tongtien;
}

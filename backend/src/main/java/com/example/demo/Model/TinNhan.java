package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name = "tinnhan")
@Data
public class TinNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Integer nguoigui;
    @Column
    private Integer nguoinhan;
    @Column
    private String noidung;
    @Column
    private Integer trangthai;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp thoigian;
    @Column
    private Integer loainguoigui;
}

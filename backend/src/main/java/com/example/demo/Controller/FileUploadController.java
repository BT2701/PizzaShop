package com.example.demo.Controller;

import com.example.demo.Model.KhachHang;
import com.example.demo.Model.TaiKhoan;
import com.example.demo.Repository.KhachHangRepo;
import com.example.demo.Repository.TaiKhoanRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class FileUploadController {
    @Autowired
    private KhachHangRepo repo;
    @Autowired
    private TaiKhoanRepo taiKhoanRepo;

    @Value("${upload.path}")
    private String uploadPath;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, Object>> handleFileUpload(@RequestParam("avt") MultipartFile file,
                                                                @RequestParam("makh")int makh,
                                                                HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        if (file.isEmpty()) {
            response.put("success", false);
            response.put("message", "No file selected");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // Định nghĩa đường dẫn lưu trữ file
            String filename = file.getOriginalFilename();
            Path path = Paths.get(uploadPath + File.separator + filename);

            // Kiểm tra xem tệp ảnh có thực sự là ảnh không
            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                response.put("success", false);
                response.put("message", "File không phải là ảnh.");
                return ResponseEntity.badRequest().body(response);
            }

            // Kiểm tra xem tệp ảnh đã tồn tại chưa
            if (Files.exists(path)) {
                response.put("success", true);
                response.put("filename", filename);
                repo.updateAvt(filename,makh);
                KhachHang khachHang=repo.findById(makh).get();
                khachHang.setTaikhoan(taiKhoanRepo.findByMakh(makh));
                session.setAttribute("user", khachHang);
                return ResponseEntity.ok(response);
            }

            // Kiểm tra kích thước ảnh
            if (file.getSize() > 5000000) {
                response.put("success", false);
                response.put("message", "Tệp ảnh quá lớn.");
                return ResponseEntity.badRequest().body(response);
            }

            // Lấy phần mở rộng của tệp
            String fileExtension = getFileExtension(filename);
            if (!fileExtension.equalsIgnoreCase("jpg") && !fileExtension.equalsIgnoreCase("png") &&
                    !fileExtension.equalsIgnoreCase("jpeg") && !fileExtension.equalsIgnoreCase("gif")) {
                response.put("success", false);
                response.put("message", "Chỉ cho phép tải lên các tệp JPG, JPEG, PNG & GIF.");
                return ResponseEntity.badRequest().body(response);
            }

            // Lưu file vào đường dẫn
            Files.copy(file.getInputStream(), path);

            response.put("success", true);
            response.put("filename", filename);
        } catch (IOException e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "File upload failed");
        }
        repo.updateAvt(response.get("filename").toString(),makh);
        KhachHang khachHang=repo.findById(makh).get();
        khachHang.setTaikhoan(taiKhoanRepo.findByMakh(makh));
        session.setAttribute("user", khachHang);
//        System.out.println(response.get("filename"));
        return ResponseEntity.ok(response);
    }

    private String getFileExtension(String filename) {
        if (filename == null || filename.isEmpty()) {
            return "";
        }
        int dotIndex = filename.lastIndexOf('.');
        return (dotIndex == -1) ? "" : filename.substring(dotIndex + 1);
    }
}

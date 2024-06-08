package com.example.demo.Repository;

import com.example.demo.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    @Query("SELECT id, name, department from student group by department")
    List<Student> findStudentKhoa2();

    @Query("select id, name, department from student where it > 5 group by department")
    List<Student> findStudentOver5();
}

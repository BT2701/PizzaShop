import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTable = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/sanphamnoibac')
            .then(response => {
                console.log(response.data); // Log dữ liệu phản hồi
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu sinh viên!', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Danh sách Sinh viên</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="text-left">
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">ID</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">Tên</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">Tuổi</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">Khoa</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">Toán</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">Tiếng Anh</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase border-b border-gray-200">CNTT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id} className="hover:bg-blue-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-55">
                                <td className="px-6 py-4 border-b border-gray-200">{student.masp}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.tensp}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.loai.tenloai}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.soluong}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.donvitinh}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.hinhanh}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{student.dongia}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;

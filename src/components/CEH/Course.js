import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function Course() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark .text-xl {
                    color: #fff;} 
                `}
            </style>
            <div className="text-center display-3">
                <div className="mx-auto" style={{ width: '80%' }}>
                    <h6 className="text-3xl font-weight-bold display-3" style={{ color: '#ffb606' }}>
                        HỌC PHÍ KHÓA HỌC
                    </h6>
                    <p className="text-xl">
                        Học phí trọn khóa: <strong>6.500.000 VND</strong> (chưa bao gồm lệ phí thi)
                    </p>
                </div>
                <div className="mt-4 ">
                    <a to="/dang-ky-ngay" className="btn btn-success p-3" style={{fontSize:"2rem"}}>
                        Đăng ký ngay
                    </a>
                </div>
    
                <div className="py-4">
                <h1
                    className="display-3 font-weight-bold text-center pb-4 mt-5"
                    style={{ color: "#f57e25" }}
                >
                    NỘI DUNG CHƯƠNG TRÌNH HỌC
                    <div className="mx-auto" style={{ width: '80%'}}>
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2023/09/chuong-trinh-hoc-ceh-scaled.jpg"
                            className="img-fluid"
                        />
                    </div>
                </h1>
            </div>
            </div>
        </div>
    )
}

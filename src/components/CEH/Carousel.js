import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';
import '../../assets/Main.css';


export default function Carousel() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <div className="position-relative text-center bg-dark">
                <div className="img-wrapper" style={{height:'400px'}}>
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2021/12/banner-1920x550-Template-scaled.jpeg"
                        alt="thong-tin-khoa-ngan-han"
                        className="img-fluid"
                        style={{ width: '100%', opacity: 0.5 }}
                    />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-white p-3  ">
                    <h1 style={{ fontSize: "6.0rem", fontWeight:'900' }}> KHÓA HỌC CEH</h1>
                </div>
            </div>
            <div className="container mt-5" style={{ maxWidth: '1200px' }}>
                <div className="row g-5">
                    <div className="col-md-8">
                        <div className="p-4" style={{ fontSize: '3.0rem' }}>
                            <h1 className="mb-3 display-1" style={{ color: '#f57e25', fontSize: '3.5rem' }}>
                                THÔNG TIN KHÓA HỌC
                            </h1>
                            <ul>
                                <li className="mb-2">
                                    Tên khóa học: <b>CEH (V12) Certified Ethical Hacker</b>
                                </li>
                                <li className="mb-2">
                                    Giảng viên: thầy <b> Trương Phạm Hoài Thương</b>
                                </li>
                                <li className="mb-2">Thời lượng: 40h, mỗi buổi 2h</li>
                                <li className="mb-2">Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
                                <li className="mb-2">Hình thức: offline</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <div className="p-4 rounded-lg border border-secondary w-100" style={{ height: 'auto' }}>
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-2048x1774.jpg"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

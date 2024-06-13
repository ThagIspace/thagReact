import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';
function Value() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <div className="container">
                <h6
                    className="display-5 text-center mb-5"
                    style={{ color: "#ffb606", fontWeight: "bold" }}
                >
                    GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC
                </h6>
    
                <section className="row justify-content-center align-items-center">
                <div className="col-sm-6 col-lg-6 col-xl-6 ">
                        <ul
                            style={{ fontSize: "2.0rem" }}
                        >
                            <li>Học viên được trang bị các kiến thức từ cơ bản đến chuyên sâu về bảo mật.
                            </li>
                            <li>Sử dụng thành thạo các công cụ và phương thức tấn công của các Hacker, có khả năng ngăn chặn, phòng chống các hành vi xâm nhập trái phép và phá hoại hệ thống mạng.
                            </li>
                            <li>Có kiến thức về quản trị việc đăng nhập nâng cao dùng cho việc đảm bảo thông tin và cho phép bạn quản lý bảo mật thông tin một cách rõ ràng hơn.
                            </li>
                            <li>Có đủ kiến thức và kỹ năng trở thành chuyên gia an toàn thông tin, kiểm toán hệ thống thông tin, tư vấn an toàn thông tin…cho các doanh nghiệp
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="300" // Đặt kích thước mong muốn cho hình ảnh
                            height="300"
                            src="https://ispace.edu.vn/wp-content/uploads/2023/09/amazon-web-services-cloud-1-768x768.jpg"
                        />
                    </div>
                    
                </section>
            </div>
        </div>
    );
}

export default Value;

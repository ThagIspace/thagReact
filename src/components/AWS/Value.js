import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';
function Value() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <div className="container">
                <h6
                    className="display-5 text-center"
                    style={{ color: "#ffb606", fontWeight: "bold" }}
                >
                    GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC
                </h6>
    
                <section className="row justify-content-center align-items-center">
                    <div className="col-sm-6 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="300" // Đặt kích thước mong muốn cho hình ảnh
                            height="300"
                            src="https://ispace.edu.vn/wp-content/uploads/2023/08/amazon-web-services-cloud-1-768x768.jpg"
                            className="img-fluid"
                            alt="aws-cloud"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6 ">
                        <ul
                            style={{ fontSize: "2.0rem" }}
                        >
                            <li>Hiểu biết về cơ sở hạ tầng toàn cầu AWS</li>
                            <li>Hiểu biết về các nguyên tắc kiến trúc cơ bản của việc xây dựng trên AWS</li>
                            <li>Khả năng xác định dịch vụ AWS đáp ứng yêu cầu kỹ thuật nhất định</li>
                            <li>Kiến thức về các phương pháp hay được đề xuất để xây dựng các ứng dụng an toàn và đáng tin cậy trên nền tảng AWS</li>
                            <li>Có đủ kiến thức để thi lấy chứng chỉ AWS Certified Cloud Practitioner.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Value;

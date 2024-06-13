import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';
function Infor() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <div className="pb-10">
            <style>
                {`
                    .dark ul li {
                        color: #fff;
                    }
                    
                `}
            </style>
                <h1
                    className="pt-5 text-center display-5"
                    style={{ color: "#ffb606", fontWeight: "bold" }}
                >
                    THÔNG TIN GIẢNG VIÊN
                </h1>
    
                <section className="row justify-content-center align-items-center">
                <div className="col-sm-6 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="300" // Đặt kích thước mong muốn cho hình ảnh lớn hơn
                            height="400"
                            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-768x1449.jpg"
                            className="img-fluid"
                            alt="giang-vien-AWS"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                        <ul
                            style={{ width: "80%", margin: "0 auto", fontSize: "2.5rem" }}
                        >
                            <li>
                                Thầy <strong>Trương Phạm Hoài Thương</strong> - giảng viên tại khoa An ninh mạng ở trường iSPACE, đảm nhận việc giảng dạy các môn học chuyên ngành về an toàn thông tin, chia sẻ kiến thức và kinh nghiệm thực tiễn cho sinh viên…
                            </li>
                            <li>05 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ bảo mật từ EC-council và CompTIA.
                            </li>
                            <li>
                                Thầy Trường Phạm Hoài Thương đã tham gia vào nhiều dự án đánh giá an toàn thông tin, triển khai các giải pháp bảo mật hiệu quả và thực hiện ứng cứu sự cố bảo mật.
                            </li>
                            <li>
                                Từ lúc còn là sinh viên, thầy Hoài Thương đã tham gia xây dựng và phát triển cộng đồng AdminVietNam – một blog chuyên về chia sẻ kiến thức an ninh mạng và quản trị mạng.
                            </li>
                            <li>
                                Đạt loại giỏi trong cuộc thi tay nghề thành phố Hồ Chí Minh – WorldSkills Viet Nam 2018.
                            </li>
    
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Infor;

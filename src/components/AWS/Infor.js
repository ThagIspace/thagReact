import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

function Infor (){
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark ul li {
                        color: #fff;
                    }
                    
                `}
            </style>
            <div className="pb-10">
                <h1
                    className="pt-5 text-center display-5"
                    style={{ color: "#ffb606", fontWeight: "bold" }}
                >
                    THÔNG TIN GIẢNG VIÊN
                </h1>
    
                <section className="row justify-content-center align-items-center">
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                        <ul
                            style={{ width: "80%", margin: "0 auto", fontSize: "2.5rem" }}
                        >
                            <li>
                                Thầy <strong>Ths Lê Hoàng Bình Nguyên</strong>
                            </li>
                            <li>Phó trưởng khoa Công nghệ thông tin</li>
                            <li>
                                Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt
                                Nam.
                            </li>
                            <li>
                                Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho
                                sinh viên.
                            </li>
                            <li>
                                Sở hữu chứng chỉ AWS Certified Solutions Architect và AWS
                                Certified Developer – Associate về điện toán đám mây.
                            </li>
                            <li>
                                Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là
                                sinh viên: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên
                                quốc tế ICPC,…
                            </li>
                            <li>
                                Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng
                                viên các trường đại học, cao đẳng của Việt Nam và hiện là giảng
                                viên chính thức của chương trình AWS/ReStart Việt Nam.
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="300" // Đặt kích thước mong muốn cho hình ảnh lớn hơn
                            height="400"
                            src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg"
                            className="img-fluid"
                            alt="giang-vien-AWS"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Infor;

import React,{useContext} from 'react'
import '../../assets/Main.css';
import { ThemeContext } from '../../components/ThemeContext';


const About_ANM = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <div className="text-center p-5 " style={{ width: "80%", margin: "0 auto" }}>
                <h1>
                    <span className="text-danger font-weight-bold">
                        Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức,
                        nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG
                        – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống
                        tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm
                        thực tiễn ngay khi còn ngồi trên ghế nhà trường.
                    </span>
                </h1>
                <h1 className="mt-5 mb-5">
                    <span className="text-danger font-weight-bold">
                        Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học
                        được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn
                        gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.
                    </span>
                </h1>
            </div>
            <section className="container-fluid text-center">
    <div className="row">
        <div className="col-12">
            <img
                src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "100%" }}
            />
        </div>
    </div>
</section>
        </div>
    );
};

export default About_ANM;

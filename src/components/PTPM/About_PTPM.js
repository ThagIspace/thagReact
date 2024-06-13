import React,{useContext} from 'react'
import '../../assets/Main.css';
import { ThemeContext } from '../../components/ThemeContext';

const About_PTPM = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <div className="text-center p-5" style={{ width: "80%", margin: "0 auto" }}>
                <h1>
                    <span className="text-danger font-weight-bold mb-5">
                        Tại iSPACE, ngành phát triển phần mềm được thiết kế tối thiểu 500
                        giờ trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp. Sinh
                        viên sẽ được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm
                        thông qua quá trình học tập tại doanh nghiệp cùng các sản phẩm có
                        khả năng được ứng dụng trong thực tế.
                    </span>
                </h1>

            </div>
            <section className="w-100">
                <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg"
                    alt=""
                    className="img-fluid d-block"
                />
            </section>
        </div>
    );
};

export default About_PTPM;
